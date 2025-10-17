/**
 * Opens a custom page in a model-driven app using Xrm.Navigation.navigateTo from a form.
 *
 * @param {object} pageContext - The form context (usually executionContext.getFormContext()).
 * @param {string} paramPage - The unique name of the custom page to open.
 * @param {string} paramTitle - The title to display on the custom page dialog.
 * @param {number} paramTarget - The target for the page (1 = inline, 2 = dialog, etc.).
 * @param {number} paramPosition - The position of the dialog (1 = center, 2 = side).
 * @param {number} paramWidth - The width of the dialog as a percentage (e.g., 50 for 50%).
 * @param {number} paramHeight - The height of the dialog as a percentage (e.g., 70 for 70%).
 */
function openCustomPageForm(pageContext, paramPage, paramTitle, paramTarget, paramPosition, paramWidth, paramHeight) {
    // Validate required parameters
    if (!pageContext || !paramPage) {
        console.error("pageContext and paramPage are required.");
        return;
    }

    Xrm.Navigation.navigateTo(
        {
            pageType: "custom",
            name: paramPage,
            entityName: pageContext.data.entity.getEntityName(),
            recordId: pageContext.data.entity.getId()
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

/**
 * Opens a custom page in a model-driven app from a grid using Xrm.Navigation.navigateTo.
 *
 * @param {object} gridContext - The grid context (usually executionContext.getFormContext() or executionContext).
 * @param {string} paramPage - The unique name of the custom page to open.
 * @param {string} paramTitle - The title to display on the custom page dialog.
 * @param {number} paramTarget - The navigation target (1 = inline, 2 = dialog, etc.).
 * @param {number} paramPosition - The position of the dialog (1 = center, 2 = side).
 * @param {number} paramWidth - The width of the dialog as a percentage (e.g., 50 for 50%).
 * @param {number} paramHeight - The height of the dialog as a percentage (e.g., 70 for 70%).
 */
function openCustomPageGrid(gridContext, paramPage, paramTitle, paramTarget, paramPosition, paramWidth, paramHeight) {
    // Validate required parameters
    if (!gridContext || !paramPage) {
        console.error("gridContext and paramPage are required.");
        return;
    }

    var selectedRows = gridContext.getGrid().getSelectedRows();
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

