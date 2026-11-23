# Open a custom or generative page

Use [openPage.js](./openPage.js) to open a custom or generative page from
a model-driven app with table context and, when available, a selected record. The script uses
`Xrm.Navigation.navigateTo` and works in the Unified Interface.

## Preparation

1. Add the page to the model-driven app and publish the app.
2. Copy the script into a JavaScript web resource in your solution.
3. Add the desired example function below to the same web resource.
   Replace the example name or GUID with your own page's identifier.
4. Save and publish the web resource.
5. Create a button on the appropriate command bar, select **Run JavaScript**,
   and select the web resource and example function. Add the context parameter
   as described in the example. Save and publish the command bar.

Find a custom page's logical name under **Name** in the solution explorer.
Find a generative page's GUID in the **Generative page** field in its properties
in the app designer.

## Example: custom page from a form

Add this function to the same web resource:

```javascript
function openCustomFromForm(primaryControl) {
    return openPage(
        primaryControl, "form", "custom", "cr123_mypage",
        "My page", 2, 1, 70, 80
    );
}
```

Create the button on the **main form** command bar. Set the function name to
`openCustomFromForm` and add `PrimaryControl` as a parameter. The function opens
the page in a centered dialog with 70% width and 80% height.

The custom page can read the record ID using `Param("recordId")` and the
logical table name using `Param("entityName")`. The record must be saved first.

## Example: generative page from a grid

Add this function to the same web resource:

```javascript
function openGenerativeFromGrid(selectedControl) {
    return openPage(
        selectedControl, "grid", "generative",
        "00000000-0000-0000-0000-000000000000",
        "My generative page", 2, 2, 50, 80
    );
}
```

Replace the example GUID with the actual page ID. Create the button on the
**main grid** command bar. Set the function name to `openGenerativeFromGrid` and
add `SelectedControl` as a parameter. No selection is required: without a
selected row, only `entityName` is passed and `recordId` is omitted. If multiple
rows are selected, the first is used. The page opens in a side dialog.

Configure the generative page to accept `recordId` and `entityName` as input
parameters. Without this configuration, the page cannot use the record context.
The page must also handle an absent `recordId` when no row is selected.

## Display Order from a grid without a selection

The script includes `openOnGrid_DisplayOrder`. On the **main grid** command bar,
configure **Run JavaScript** with this exact function name and `SelectedControl`
as parameter 1. Do not add a rule that requires selected records.

```javascript
function openOnGrid_DisplayOrder(selectedControl) {
    return openPage(
        selectedControl, "grid", "custom", "sd_kbdisplayorder_1ec18",
        "Knowledge Articles", 2, 2, 30, 100
    );
}
```

Without a selection, the custom page receives the grid's logical table name via
`Param("entityName")`; `Param("recordId")` is blank. Its formulas must allow that
blank value, for example by checking `IsBlank(Param("recordId"))` before looking
up a specific record. The script does not pass the current view's rows or filters.

After updating the web resource, save and publish it, then save and publish the
command bar and reload the app. Test both without a selection and with a selected
row.

## Parameters

`openPage(context, source, pageType, page, title, target, position, width, height)`

| Parameter | Description |
| --- | --- |
| `context` | Form context (`PrimaryControl`) or grid context (`SelectedControl`). |
| `source` | `"form"` or `"grid"`. |
| `pageType` | `"custom"` or `"generative"`. |
| `page` | Logical name of the custom page or GUID of the generative page. |
| `title` | Optional dialog title. |
| `target` | Optional: `1` for inline (default), `2` for a dialog. |
| `position` | Optional for a dialog: `1` for center, `2` for the side. |
| `width` | Optional dialog width as a percentage. |
| `height` | Optional dialog height as a percentage. |

The function returns the navigation promise. For inline navigation, it resolves
after the page opens; for a dialog, it resolves when the dialog closes.
Navigation errors are logged and rethrown. Invalid input or an unsaved form
record causes an error. A grid without a selection opens the page without a
record ID.

## Further reading

- [Microsoft: navigateTo](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto)
- [Microsoft: navigate to a custom page](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/navigate-to-custom-page-examples)
- [Microsoft: navigate to a generative page](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/navigate-to-generative-page-examples)
- [Microsoft: customize the command bar](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/use-command-designer)
