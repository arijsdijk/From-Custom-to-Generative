
# From Custom to Generative

Closing the Gaps in Model-Driven Apps


# Agenda

1. Apps in the Power Platform
2. Model-driven apps
3. Custom pages
4. Generative pages
5. Display options
6. Development, licensing & availability
7. Tips & Tricks


# Apps in the<br /> Power Platform


# What do we have?

* Model-driven apps
* Canvas apps
* Code apps
* Managed apps (Copilot Managed Runtime)


# When to use what

<br />

|  | What first? | Where to build? |
| --- | --- | --- | 
| **Model-driven app** | Data first | Maker portal |
| **Canvas app** | UI first | Maker portal |
| **Code app** | Code first | Local IDE |
| **Managed app** | AI first | Copilot Studio / Cowork / Local IDE |


# Model-driven apps

* Rapid development with minimal coding
* Centralized data storage
* Easy navigation between related records
* Built-in views, forms and dashboards
* Consistent, familiar user experience
* Works across desktop, tablet, and mobile
* Role-based access control
* Ideal for data-intensive business processes


# How to get started

* Create a data model 
* Create a model-driven app 
* Add your tables (data model)
* Customize your views & forms per table
* Add custom or generative pages (if needed)


# Create a data model

![Dataverse data model](assets/2.1-model-dataverse.png)



# Create a model-driven app

![Create a model app](assets/2.2-model-create.gif)



# Add your tables

![Add a table to your app](assets/2.3-model-add-table.gif)



# Customize your views

![Add a table to your app](assets/2.4-model-view-change.gif)



# Customize your forms

![Add a table to your app](assets/2.5-model-form-change.gif)


# The end result

![Model-driven app end result](assets/2.6-model-end-result.gif)


# Now we have a</br> model-driven app


# But we probably have to close some gaps


# What gaps?

Flexible UI <br />
Custom components <br />
Power Platform connectors <br />
Data not in Dataverse, SQL or SharePoint <br />
Don't want to build a PCF <br />


# Multiple options

There are multiple options to close these gaps

![Model-driven add flexibility](assets/2.7-model-three-options.svg)


# Custom pages


# What’s a custom page?

* Model-driven app component
* Integrated Canvas app
* 99% of Canvas capabilities
* In or outside your model-driven app navigation
* Adds UI & connector flexibility


# Create a custom page

![Custom page create](assets/3.1-custom-create.gif)

> Create a new custom page from your model-driven app



# The first result

![Custom page, the first result](assets/3.2-custom-create-result.png)

> A simple "Canvas" app in your model-driven app



# The page artifact

![Custom page, the first result](assets/3.3-custom-create-solution.png)

> A new artifact will be added to your solution


# Create from solution

![Custom page, create from solution](assets/3.4-custom-create-from-solution.gif)

> Create a custom page directly from your solution



# Add to your model app

![Custom page, create from solution](assets/3.5-custom-add-to-model.gif)

> Add existing custom pages to your model-driven app





# Example

Power Platform Administration Tool





# The goal

Make Power Platform inventory accessible to a wider audience<br />Make it easy to explore and search all inventory<br/>Leverage out-of-the-box Power Platform capabilities




# The challenges

We don't want to sync data<br />We need to retrieve data through an API<br/>We don't want to use custom code




# The solution

One custom page<br />Multiple navigation items<br/>Query parameter in the URL




# The Model-driven app

![Custom page, example](assets/3.6-custom-example.gif)

> We decided to create a model-driven app



# The Custom page

![Custom page, example](assets/3.7-custom-example-page.gif)

> We added flexibility by adding a custom page

# Generative pages



# Generative pages

AI-driven experience inside your model-driven apps



# Generative pages 

* AI-driven experience inside model-driven apps
* Interactive AI agent
* Describe your page in natural language
* Build pages more simply, quickly, and intelligently
* React/TypeScript code component
* Build from your IDE or AI tool




# Create a generative page

![Generative page create](assets/4.1-genpage-create.gif)



# Prompt

```md
Build me a Kanban page. The buckets need to be based on the Incidents table Status field (New, In Progress, On hold, Resolved, Closed). Keep the UI in model-driven app style, so it fits the rest of the app. 
```



# Describe your page

![Generative page describe](assets/4.2-genpage-describe.gif)

> Describe your page and add Dataverse tables


# Plan

![Generative page plan](assets/4.3-genpage-plan.gif)

> Copilot will create a plan



# Build

![Generative page build](assets/4.4-genpage-build.gif)

> After the plan is done, Copilot will start building the page



# Build

![Generative page result](assets/4.5-genpage-result.png)



# Next prompt

```md
Only show the due date if one has been selected

The incident title is not fully visible because the incident number is on the same line. Split this information across two lines, with the incident number first

The tags on the second line include a blue tag whose information is not visible. Fix this and make all tags the same color

Wrap the tags onto multiple lines if they do not fit horizontally within the card
Remove the background colors from the bucket headers; the current version makes the overall design look cluttered
```



# Next plan & build

![Generative page iteration](assets/4.6-genpage-iteration-1.gif)

> Based on the iteration Copilot will plan and build a new version


# Next prompt

```md
When the user clicks a card, it should link to the Incident form: 

https://rsdk-preview.crm.dynamics.com/main.aspx?appid=dd25a930-7042-47b0-911a-578fe35d5a74&pagetype=entityrecord&etn=sd_incident&id=2af3d51c-9ed0-f111-a05d-0022480b1a00

I still see that the tags take up too much horizontal space. They should fit within a card.
```




# The result

![Generative page iteration](assets/4.7-genpage-iteration-result.gif)




# Another example

A generative page as a dashboard



# Dashboard

![Generative page iteration](assets/4.9-genpage-example-dashboard.gif)




# Create with AI tool

Build a generative page using your favorite AI tool



# What I used

* Visual Studio code
* GitHub Copilot 
* Power Platform Skills (/genpage)



# Create generative page

![Generative page iteration](assets/4.10.1-genpage-ide-step1.gif)

> Start selecting a skill and adding your prompt



# Create generative page

![Generative page iteration](assets/4.10.2-genpage-ide-step2.gif)

> Answer questions



# Create generative page

![Generative page iteration](assets/4.10.3-genpage-ide-step3.gif)

> Answer more questions



# Create generative page

![Generative page iteration](assets/4.10.4-genpage-ide-step4.gif)

> Verify in browser or skip verification



# Create generative page

![Generative page iteration](assets/4.10.5-genpage-ide-step5.gif)

> Done



# Created files

![Generative page iteration](assets/4.11-genpage-ide-files.png)




# The result

![Generative page iteration](assets/4.12genpage-ide-result.png)

# Display options






# Display options

![Display options](assets/5.1-displayoptions-all.svg)

> 1\. Full page | 2\. Centered dialog | 3\. Side dialog | 4\. In form | 5\. Inline dialog pane



<br /><br /><br />

# 1. Full page

Opens a page across the full width and height.

::right::

<br /><br />

![Display options](assets/5.2-displayoptions-full.svg)



<br /><br /><br />

# 2. Centered dialog

Opens a page as a centered dialog on an overlay.

::right::

<br /><br />

![Display options](assets/5.3-displayoptions-centered.svg)





<br /><br /><br />

# 3. Side dialog

Opens a page as a side dialog on an overlay.

::right::

<br /><br />

![Display options](assets/5.4-displayoptions-side.svg)



<br /><br /><br />

# 4. In form

Opens a page directly in a form (generative pages only)

::right::

<br /><br />

![Display options](assets/5.5-displayoptions-inform.svg)



<br /><br /><br />

# 5. Inline side pane

Opens a page inline as a side pane, without an overlay.

::right::

<br /><br />

![Display options](assets/5.6-displayoptions-inline.svg)




# JavaScript

To achieve this, we need a little bit of JavaScript ...



# Xrm API

Control your model-driven app with JavaScript<br />
JavaScript API from Microsoft

| Option | Explanation |
| --- | --- |
| **Navigate** | Open custom pages, generative pages, forms, and views. |
| **Dialogs** | Display pages as centered dialogs or side dialogs. |
| **Context** | Pass parameters, such as a record ID or Entity name. |
| **Interact** | Work with forms, notifications, and the Dataverse Web API. |
| **Control** | Decide how and where a page opens. |




# How it works

![Display with JavaScript](assets/4.8-javascript-flow.svg)




# JavaScript

Let's take a look at the full JavaScript code




# Implement

Let's take a look at how to implement this in your model-driven app




# Side dialog

Load a custom page as a side dialog





# Change display order

![Display with JavaScript](assets/5.10-display-sidepane.gif)



# JavaScript code

```js

function openOnForm_DisplayOrder(primaryControl) {
    return openPage(
        primaryControl, // Form (PrimaryControl) or grid (SelectedControl).
        "form", // "form" or "grid".
        "custom", //"custom" or "generative"
        "sd_kbdisplayorder_1ec18", // Logical name (custom page) or GUID (genpage)
        "Knowledge Articles", // Optional dialog title.
        2, // Optional: 1 for inline (default), 2 for a dialog.
        2, // Optional for a dialog: 1 for center, 2 for the side.
        30, //Optional dialog width as a percentage.
        100 //Optional dialog height as a percentage.
    ).then(function () {
        return primaryControl.data.refresh(false);
    });
}

```




# Upload JavaScript

![Display with JavaScript](assets/5.11-display-webresource-add.png)

> Upload the JavaScript file as a webresource



# Upload JavaScript

![Display with JavaScript](assets/5.12-display-webresource.png)

> Upload the JavaScript file as a webresource


# Edit command bar

![Display with JavaScript](assets/5.13-display-commandbar-edit.png)



# Edit command bar

![Display with JavaScript](assets/5.14-display-commandbar-mainform.png)



# Add new command

![Display with JavaScript](assets/5.15-display-command-new.png)



# Connect JavaScript function

![Display with JavaScript](assets/5.16-display-command-params.png)



# Centered dialog

Load a custom page as a centered dialog



# Resolve incidents helper

![Display with JavaScript](assets/5.20-display-center.gif)



# JavaScript

```js

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

```

> The JavaScript function to open the "Status Resolve" custom page as a centered dialog


# Command bar

![Display with JavaScript](assets/5.21-display-center-command.png)



# Passing parameters

We now open the custom page in a centered dialog

How can we pass parameters to the custom page?



# Entity & Record

By default, the XRM API passes two parameters.

**entityName** & **recordId**

                           


# Power FX

How to retrieve these parameters in your custom page?

```js

  Param(entityName) // Get entityName                   

  Param(recordId) // Get recordId

```

> Ask your AI Agent to implement this for generative pages



# Custom page Power FX

![Display with JavaScript](assets/5.22-display-center-page-param.png)

> Power FX in the App.OnStart (get recordid using the Param function)


# Custom page Power FX

![Display with JavaScript](assets/5.23-display-center-page-lookup.png)

> Power FX in the App.OnStart (lookup record from entity)



# In form

Add a generative page directly in your form (generative pages only)



# Edit form

![Display with JavaScript](assets/5.30-display-form-edit.gif)

> Open form for editing




# Add a new tab

![Display with JavaScript](assets/5.31-display-form-add-tab.gif)

> Add a new tab to your form




# Add generative page

![Display with JavaScript](assets/5.32-display-form-add-page.gif)

> Add a generative page in the new section


# Take a look

Let's take a closer look in my solution

# Development, licensing & availability


# Comparison

Let's compare custom pages and generative pages.

<br />

|  | Custom page | Generative page | 
| --- | --- | --- |
| **Development** | Maker experience / MCP | Maker experience / IDE |
| **License** | Power Apps Premium | Power Apps Premium | 
| **Availability** | GA | Preview / IDE |
| **Connectors** | Yes - GA | Yes - Preview | 
| **Dataverse tables** | No maximum | Maximum of 6 tables |
| **Custom API** | Yes - GA | Yes - Preview |
| **Solution aware & ALM** | Yes (Page) | Yes (UX Agent Project) |



# Generative pages

Some things you have to know about generative pages ... 



# Some differences

Let's check some differences between the two ways to build generative pages

<br />

|  | Maker Experience | Generative page | 
| --- | --- | --- |
| **Availability** | Preview in EU (*) | GA |
| **Number of entities** | 6 max (documented) | 6 max (undocumented) (**) | 
| **Generative AI** | Built-in Copilot | What you want |
| **Credits/tokens needed** | No (in Premium license) | Yes (***) | 

<br />

> (*) The Maker experience is only generally available (GA) in the United States, Great Britain, Australia & Singapore.

> (**) Should be the same as the maker experience (depends how you read it), but you can add more entities

> (***) You need an IDE (like Visual Studio Code) or an AI coding tool with tokens to build a generative page.



# Solution-aware

Generative pages are solution-aware, and ALM is supported!

**I don't see solution artifacts?**



# Dependencies

![Generative page create](assets/6.1-solution-uxagent.png)

> During deployment (or export), the artifacts will be added based on the dependencies <br />
> You can always add the artifacts to your solution (this is not done automatically)

# Tips & Tricks




# User Interface

Let's keep things consistent for users



# Consistency

* A consistent UI is very important
* Model-driven apps are not very flexible when it comes to the UI
* Style custom pages & generative pages like a model-driven app
* Use the same colors, fonts, sizes and structure
* Keep everything responsive



# UI baseline

An AI-ready visual baseline for custom and generative pages

<br />

| Token | Value | Use |
| --- | --- | --- |
| surface-page | #FAFAFA | Page background |
| surface-card | #FFFFFF | Sections |
| text-primary | #242424 | Text |
| font-family | Segoe UI | UI text |
| font-size-body | 14px | Body and labels |
| radius-card | 8px | Sections |
| radius-control | 4px | Inputs and buttons |

> See a full, ready-to-use UI baseline in the links section.





# Build with AI

Build a full model-driven app solution with AI




# Power Platform skills

A list of plugins, skills and agents to build solutions with AI

![Display with JavaScript](assets/7.20-power-platform-skills.png)

> https://github.com/microsoft/power-platform-skills



# Multiple plugins/skills

Let AI combine the different plugins/skills to create a full solution!




# Servicdesk

I've created the servicedesk solution with the following prompt

```md

Build a Service Desk solution. The solution must be built entirely using a model-driven app and Dataverse. Use the Power Platform and Dataverse skills that are already installed.

The app must include the following capabilities:
- Create new support tickets.
- Each ticket must have a title, description, category, and priority.
- Provide an overview of tickets, including status, assigned agent, dates, times, and related category and priority.
- Create multiple views with different filters, such as category and priority.
- Build a dashboard page with cards, statistics, key insights, and shortcuts to specific views or tickets.

```



# Servicdesk

One simple prompt and this is what I got:

**1** Model-driven app <br />
**4** Dataverse Tables <br />
**6** Filtered views <br />
**1** Dashboard (Genpage) <br />
**3** Security Roles <br />





# MCP Authoring

Build a custom page with AI using the Canvas Authoring MCP



# Canvas Authoring MCP?

New functionality that lets you connect AI to your Canvas app<br />through an MCP server. 

AI will generate the Canvas YAML and paste it onto your screen(s).



# What do we need?

<br />

* AI Code generation tool (VSCode, GitHub Copilot app, Claude Code)
* AI subscription (GitHub Copilot, Claude, Codex, etc.)
* Power Platform plugin installed
* Custom page (keep it open)
* Coauthoring enabled on a custom page

<br />

> There is no documented support for custom pages, but it works pretty well!



# Custom page setting

![Display with JavaScript](assets/7.10-coauthor-setting.png)



# Configure Canvas MCP

Run the **/canvas-apps:configure-canvas-mcp** skill

![Display with JavaScript](assets/7.11-coauthor-connect.png)



# Describe your custom page

Use the **/canvas-apps:canvas-app** skill to let AI build your page

![Display with JavaScript](assets/7.12-coauthor-create.png)

# Questions?



# Thank you!



# links

<br />

**Documentation**

[Microsoft Learn - Model-driven apps overview](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-driven-app-overview)

[Microsoft Learn - Custom pages overview](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-app-page-overview)

[Microsoft Learn - Generative pages](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/generative-pages)

[Microsoft Learn - XRM CLient API](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/clientapi-xrm)

::right::

<br /><br />

**Blogposts**

[Blog - Generative pages with GitHub Copilot CLI - Part 1](https://arjanrijsdijk.com/blogs/genpages-with-copilot-cli/)

[Blog - Generative pages with GitHub Copilot CLI - Part 2](https://arjanrijsdijk.com/blogs/genpages-with-copilot-cli-part2/)

<br/>

**Tools**

[Power Platform Skills](https://github.com/microsoft/power-platform-skills)
