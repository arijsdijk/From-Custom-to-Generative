/**
 * Opens a custom page in a model-driven app using Xrm.Navigation.navigateTo from a form or a grid.
 *
 * @param {object} paramContext - The form context (usually executionContext.getFormContext()).
 * @param {string} paramPage - The unique name of the custom page to open.
 * @param {string} paramTitle - The title to display on the custom page dialog.
 * @param {number} paramTarget - The target for the page (1 = inline, 2 = dialog, etc.).
 * @param {number} paramPosition - The position of the dialog (1 = center, 2 = side).
 * @param {number} paramWidth - The width of the dialog as a percentage (e.g., 50 for 50%).
 */

function openCustomPageForm(paramContext, paramPage, paramTitle, paramTarget, paramPosition, paramWidth, paramHeight) {
    // Validate required parameters
    if (!paramContext || !paramPage) {
        console.error("paramContext and paramPage are required.");
        return;
    }

    Xrm.Navigation.navigateTo(
        {
            pageType: "custom",
            name: paramPage,
            entityName: paramContext.data.entity.getEntityName(),
            recordId: paramContext.data.entity.getId()
        },
        {
            target: paramTarget,
            position: paramPosition,
            width: { value: paramWidth, unit: "%" },
            height: { value: paramHeight, unit: "%" },
            title: paramTitle
        }
    )
    .then(result => {
        // Handle success (result may be undefined for custom pages)
        console.log("Custom page opened successfully.", result);
    })
    .catch(error => {
        // Handle errors
        console.error("Error opening custom page:", error);
    });
}

function openCustomPageGrid(paramContext, paramPage, paramTitle, paramTarget, paramPosition, paramWidth, paramHeight) {
    // Validate required parameters
    if (!paramContext || !paramPage) {
        console.error("paramContext and paramPage are required.");
        return;
    }

    var selectedRows = paramContext.getGrid().getSelectedRows();
    if (selectedRows.getLength() === 0) {
        console.error("No row selected in the grid.");
        return;
    }

    var row = selectedRows.get(0);
    var entityReference = row.getData().getEntity();

    Xrm.Navigation.navigateTo(
        {
            pageType: "custom",
            name: paramPage,
            entityName: entityReference.getEntityName(),
            recordId: entityReference.getId()
        },
        {
            target: paramTarget,
            position: paramPosition,
            width: { value: paramWidth, unit: "%" },
            height: { value: paramHeight, unit: "%" },
            title: paramTitle
        }
    )
    .then(result => {
        // Handle success (result may be undefined for custom pages)
        console.log("Custom page opened successfully from grid.", result);
    })
    .catch(error => {
        // Handle errors
        console.error("Error opening custom page from grid:", error);
    });
}


/**
 * Opens a custom page in a side pane from a form.
 *
 * @param {object} paramContext - The form context (executionContext.getFormContext()).
 * @param {string} panePage - The unique name of the custom page to open.
 * @param {string} paneTitle - The title to display on the side pane.
 * @param {number} paneWidth - The width of the side pane in pixels (default = 600).
 * @param {string} paneId - A unique identifier for the side pane instance.
 */

function openCustomPageFormPane(paramContext, pageName, paneTitle, paneWidth, paneId) {
    if (!Xrm?.App?.sidePanes) {
        console.error("Side panes API not available."); return;
    }
    if (!paramContext || !pageName) {
        console.error("paramContext and pageName are required."); return;
    }

    const entityId = (paramContext.data?.entity?.getId?.() || "").replace(/[{}]/g, "");
    const entityName = paramContext.data?.entity?.getEntityName?.() || "";

    //const paneId = "customPagePane_" + (entityId || "new");
    const pageInput = {
        pageType: "custom",
        name: pageName,          // logical name of the custom page
        entityName: entityName,  // logical table name (e.g., "account")
        recordId: entityId       // MUST be a GUID without braces
    };

    const existingPane = Xrm.App.sidePanes.getPane(paneId);
    const openPane = (pane) => pane?.navigate ? pane.navigate(pageInput) : console.error("Pane.navigate missing");

    if (existingPane) openPane(existingPane);
    else Xrm.App.sidePanes.createPane({ title: paneTitle, paneId, canClose: true, width: paneWidth })
        .then(openPane)
        .catch(err => console.error("Error opening side pane:", err));
}

function openCustomPageGridPane(paramContext, pageName, paneTitle, paneWidth) {
    if (!Xrm?.App?.sidePanes) { console.error("Side panes API not available."); return; }
    if (!paramContext || !pageName) { console.error("paramContext and pageName are required."); return; }

    const selectedRows = paramContext.getGrid?.().getSelectedRows?.();
    if (!selectedRows || selectedRows.getLength() === 0) { console.error("No rows selected"); return; }

    const row = selectedRows.get(0);
    const rowData = row.getData?.();
    let entityId = "", entityName = "";

    if (rowData?.getEntity) {
        const ent = rowData.getEntity();
        entityId = (ent?.getId?.() || "").replace(/[{}]/g, "");
        entityName = ent?.getEntityName?.() || "";
    } else if (rowData?.getEntityReference) {
        const entRef = rowData.getEntityReference();
        entityId = (entRef?.id || "").replace(/[{}]/g, "");
        entityName = entRef?.entityType || "";
    }

    const paneId = "customPagePane_" + (entityId || "new");
    const pageInput = {
        pageType: "custom",
        name: pageName,
        entityName: entityName,
        recordId: entityId
    };

    const existingPane = Xrm.App.sidePanes.getPane(paneId);
    const openPane = (pane) => pane?.navigate ? pane.navigate(pageInput) : console.error("Pane.navigate missing");

    if (existingPane) openPane(existingPane);
    else Xrm.App.sidePanes.createPane({ title: paneTitle, paneId, canClose: true, width: paneWidth || 600 })
        .then(openPane)
        .catch(err => console.error("Error opening side pane from grid:", err));
}






// Call this from Form OnLoad with your parameters.
// Example OnLoad handler:
//   initCustomPagePaneOnLoad(executionContext, "cr5d_custompage_example", "My Pane", 450, "customPane1");

function initCustomPagePaneOnLoad(executionContext, pageName, paneTitle, paneWidth, paneId) {
    try {
        if (!executionContext || !executionContext.getFormContext) {
            console.error("executionContext is required."); 
            return;
        }

        var formContext = executionContext.getFormContext();
        var sidePanes = Xrm?.App?.sidePanes;
        if (!sidePanes) {
            console.error("Side panes API not available.");
            return;
        }

        const entityId = (formContext.data?.entity?.getId?.() || "").replace(/[{}]/g, "");
        const entityName = formContext.data?.entity?.getEntityName?.() || "";
        const pageInput = {
            pageType: "custom",
            name: pageName,
            entityName: entityName,
            recordId: entityId
        };

        const existingPane = sidePanes.getPane(paneId);

        // If pane exists, navigate to the new record
        if (existingPane) {
            existingPane.navigate(pageInput);
        } else {
            // If no pane yet, open it for the first time
            sidePanes.createPane({
                title: paneTitle,
                paneId,
                canClose: true,
                width: paneWidth
            }).then(pane => pane.navigate(pageInput))
              .catch(err => console.error("Error opening side pane:", err));
        }

        // Set up refresh-on-load only if the pane exists already
        var key = (paneId || pageName || "default") + "_onload_handler";
        var store = window.__sidePaneHandlerStore = window.__sidePaneHandlerStore || {};
        if (store[key] && store[key].attached) {
            try { formContext.data.removeOnLoad(store[key].fn); } catch (_e) { /* ignore */ }
            store[key].attached = false;
        }

        var refreshHandler = function () {
            try {
                const existingPane = Xrm.App.sidePanes.getPane(paneId);
                if (existingPane) {
                    const ctx = executionContext.getFormContext ? executionContext.getFormContext() : formContext;
                    const entityId = (ctx.data?.entity?.getId?.() || "").replace(/[{}]/g, "");
                    const entityName = ctx.data?.entity?.getEntityName?.() || "";
                    existingPane.navigate({
                        pageType: "custom",
                        name: pageName,
                        entityName: entityName,
                        recordId: entityId
                    });
                }
            } catch (e) {
                console.error("Error refreshing side pane on form load:", e);
            }
        };

        formContext.data.addOnLoad(refreshHandler);
        store[key] = { fn: refreshHandler, attached: true };

    } catch (err) {
        console.error("initCustomPagePaneOnLoad failed:", err);
    }
}