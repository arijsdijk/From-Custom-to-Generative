/**
 * Opens a custom or generative page with table context and optional grid record context.
 * @param {object} context - Form context (PrimaryControl) or grid context (SelectedControl). For a form event, use executionContext.getFormContext().
 * @param {string} source - "form" for a form or "grid" for a grid. Without a grid selection, only entityName is passed. If multiple rows are selected, the first row is used.
 * @param {string} pageType - "custom" or "generative".
 * @param {string} page - Logical name of the custom page or GUID of the generative page.
 * @param {string} [title] - Title of the dialog.
 * @param {number} [target=1] - 1: inline; 2: dialog.
 * @param {number} [position] - For target 2: 1 for center, 2 for the side.
 * @param {number} [width] - Dialog width as a percentage.
 * @param {number} [height] - Dialog height as a percentage.
 * @returns {Promise} Resolves after inline navigation or when the dialog closes.
 *
 * For a command bar, pass the context as PrimaryControl or SelectedControl. Examples:
 * openPage(primaryControl, "form", "custom", "cr123_mypage", "My page", 2, 1, 70, 80);
 * openPage(selectedControl, "grid", "generative", "00000000-0000-0000-0000-000000000000", "My page", 2, 2, 50, 80);
 *
 * The page must be able to receive recordId and entityName. A custom page can
 * read these with Param("recordId") and Param("entityName"); a generative page
 * must be configured to accept the input parameters.
 */
function openPage(context, source, pageType, page, title, target = 1, position, width, height) {
    if (!context || !page || (source !== "form" && source !== "grid") ||
        (pageType !== "custom" && pageType !== "generative")) {
        throw new Error("Provide a valid context, source, page type, and page.");
    }

    let entity;
    let entityName;
    if (source === "form") {
        entity = context.data.entity;
        entityName = entity.getEntityName();
    } else {
        const rows = context.getGrid().getSelectedRows();
        if (rows.getLength() > 0) {
            entity = rows.get(0).getData().getEntity();
            entityName = entity.getEntityName();
        } else {
            entityName = context.getEntityName();
        }
    }

    const pageInput = {
        pageType: pageType,
        entityName: entityName
    };
    if (entity) {
        const recordId = entity.getId();
        if (!recordId) {
            throw new Error("Save the record before opening the page.");
        }
        pageInput.recordId = recordId.replace(/[{}]/g, "");
    }
    if (pageType === "custom") {
        pageInput.name = page;
    } else {
        pageInput.pageId = page;
    }

    const navigationOptions = { target: target };
    if (target === 2) {
        if (title !== undefined) navigationOptions.title = title;
        if (position !== undefined) navigationOptions.position = position;
        if (width !== undefined) navigationOptions.width = { value: width, unit: "%" };
        if (height !== undefined) navigationOptions.height = { value: height, unit: "%" };
    }

    return Xrm.Navigation.navigateTo(pageInput, navigationOptions).catch(function (error) {
        console.error("Could not open the page:", error);
        throw error;
    });
}

function openOnForm_DisplayOrder(primaryControl) {
    return openPage(
        primaryControl, // Form context (PrimaryControl) or grid context (SelectedControl).
        "form", // "form" or "grid".
        "custom", //"custom" or "generative"
        "sd_kbdisplayorder_1ec18", // Logical name of the custom page or GUID of the generative page.
        "Knowledge Articles", // Optional dialog title.
        2, // Optional: 1 for inline (default), 2 for a dialog.
        2, // Optional for a dialog: 1 for center, 2 for the side.
        30, //Optional dialog width as a percentage.
        100 //Optional dialog height as a percentage.
    ).then(function () {
        return primaryControl.data.refresh(false);
    });
}

function openOnGrid_DisplayOrder(selectedControl) {
    return openPage(
        selectedControl, 
        "grid", 
        "custom", 
        "sd_kbdisplayorder_1ec18",
        "Knowledge Articles", 
        2, 
        2, 
        30, 
        100
    ).then(function () {
        selectedControl.refresh();
    });
}

function openOnForm_StatusResolve(primaryControl) {
    return openPage(
        primaryControl, // Form context (PrimaryControl) or grid context (SelectedControl).
        "form", // "form" or "grid".
        "custom", //"custom" or "generative"
        "sd_instatusresolve_90a12", // Logical name of the custom page or GUID of the generative page.
        "Incident Resolution", // Optional dialog title.
        2, // Optional: 1 for inline (default), 2 for a dialog.
        1, // Optional for a dialog: 1 for center, 2 for the side.
        30, //Optional dialog width as a percentage.
        32 //Optional dialog height as a percentage.
    ).then(function () {
        return primaryControl.data.refresh(false);
    });
}