# Model-driven app UI tokens

An AI-ready visual baseline for custom and generative pages that should feel at home in a model-driven app.

## Scope and evidence

This reference describes the **light** Service Desk example shown in the presentation. The page background, section card, field, heading, body text and command styles were measured from its live incident form. The incident list screenshot informed the grid guidance. Other values are recommendations, not measurements or official Power Apps tokens. They may differ in another environment, theme, browser, zoom level or platform update.

Use the target app's own theme and native components where possible; validate against the actual host rather than treating these values as a platform contract. Do not copy the host navigation or command bar inside an embedded page.

## Tokens

`Measured` means observed in the incident form's computed CSS; `Suggested` means a starting point to verify in the target app. Values use CSS pixels, not screenshot pixels.

### Color

| Token | Value | Use | Basis |
| --- | --- | --- | --- |
| `surface-page` | `#FAFAFA` | Page background | Measured |
| `surface-card` | `#FFFFFF` | Section and card background | Measured |
| `surface-control` | `#F5F5F5` | Resting form field background | Measured |
| `text-primary` | `#242424` | Body text, labels and headings | Measured |
| `text-secondary` | `#424242` | Secondary text | Measured on a visible link; suggested for secondary text |
| `border-subtle` | `#E0E0E0` | Grid separators and visible card borders | Suggested |
| `border-control` | `#616161` | Visible boundary of editable controls | Suggested; check non-text contrast |
| `interactive` | `#005A9E` | Links and interactive accents | Suggested accessible starting point |
| `interactive-hover` | `#004578` | Hovered links and actions | Suggested |
| `focus` | `#005A9E` | Visible keyboard focus indicator | Suggested |
| `status-error` | `#A4262C` | Error text and required indicators | Suggested |
| `status-success` | `#107C10` | Success indicators | Suggested; do not rely on colour alone |
| `status-warning` | `#8A4B08` | Warning text and indicators | Suggested; do not rely on colour alone |

The measured form card uses a transparent 1px border and a shadow; `border-subtle` is a recommendation for elements that need an explicit separator. A visible link in the form used `#0078D6`; the darker `interactive` value is a proposed starting point to support contrast on light backgrounds, not a measured host colour. Check all actual foreground/background combinations.

### Typography

| Token | Value | Use | Basis |
| --- | --- | --- | --- |
| `font-family` | `"Segoe UI", "Segoe UI Web (West European)", -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif` | UI text | Measured |
| `font-size-body` | `14px` | Body, labels, fields and commands | Measured |
| `line-height-body` | `20px` | Form labels and field text | Measured |
| `font-size-heading` | `20px` | Record/page heading | Measured |
| `line-height-heading` | `24px` | Record/page heading | Measured |
| `font-size-section` | `14px` | Section heading | Measured |
| `line-height-section` | `20px` | Section heading | Measured |
| `font-size-small` | `12px` | Supporting text, used sparingly | Suggested |
| `font-weight-regular` | `400` | Body and labels | Measured |
| `font-weight-semibold` | `600` | Headings and selected tabs | Measured |

### Shape, spacing and elevation

| Token | Value | Use | Basis |
| --- | --- | --- | --- |
| `radius-card` | `8px` | Form sections | Measured |
| `radius-control` | `4px` | Fields and command buttons | Measured |
| `control-height` | `32px` | Single-line form controls and commands | Measured |
| `control-padding-x` | `12px` | Input text and command padding | Measured |
| `card-padding-x` | `12px` | Form section horizontal padding | Measured |
| `space-1` | `4px` | Tight spacing | Suggested |
| `space-2` | `8px` | Related items | Suggested |
| `space-3` | `12px` | Field and card spacing | Suggested |
| `space-4` | `16px` | Section spacing | Suggested |
| `space-5` | `24px` | Larger layout gaps | Suggested |
| `shadow-card` | `0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.14)` | Form section elevation | Measured |
| `focus-width` | `2px` | Keyboard focus outline | Suggested |

## CSS starting point

For code-based pages, give these semantic variables to the AI as a starting point. The variables alone do not style controls or implement interaction states; use them in your components.

```css
:root {
  --surface-page: #fafafa;
  --surface-card: #fff;
  --surface-control: #f5f5f5;
  --text-primary: #242424;
  --text-secondary: #424242;
  --border-subtle: #e0e0e0;
  --border-control: #616161;
  --interactive: #005a9e;
  --interactive-hover: #004578;
  --focus: #005a9e;
  --status-error: #a4262c;
  --status-success: #107c10;
  --status-warning: #8a4b08;
  --font-family: "Segoe UI", "Segoe UI Web (West European)", -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  --font-size-body: 14px;
  --line-height-body: 20px;
  --font-size-heading: 20px;
  --line-height-heading: 24px;
  --font-size-section: 14px;
  --line-height-section: 20px;
  --font-size-small: 12px;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --radius-card: 8px;
  --radius-control: 4px;
  --control-height: 32px;
  --control-padding-x: 12px;
  --card-padding-x: 12px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --shadow-card: 0 0 2px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .14);
  --focus-width: 2px;
}
```

For canvas-based custom pages, translate the same values into the available controls and properties, for example `ColorValue("#242424")` for text and `Font.'Segoe UI'` for the font. Map sizes, fill and corner radius to the specific control's supported properties; CSS variables and box shadows are not Power Fx properties.

## Component guidance

- **Page and cards:** use a light page background and white, subtly elevated sections. Keep the title and section hierarchy compact.
- **Forms:** use 14px labels and values, 32px single-line controls and 4px control corners. Align labels and fields; stack them when space is limited. Distinguish editable, read-only, disabled, required and error states.
- **Lists:** prefer a compact table with aligned headers, subtle horizontal separators, readable links and a clear selection state. Provide a usable narrow-screen layout or horizontal scrolling.
- **Actions and navigation:** use compact commands and clear text labels; reserve accent colours for interactive and selected states. Follow the host's icon style and avoid duplicating its shell.
- **States:** define hover, pressed, selected, focus, disabled, loading, empty and error states explicitly. Never convey status, validation or selection through colour alone.
- **Responsive behaviour:** allow cards and columns to reflow, wrap labels and preserve usable controls at narrow widths and browser zoom. Avoid fixed page widths and clipping.
- **Accessibility:** use semantic controls and labels, keyboard navigation and a visible focus indicator. Target WCAG AA text contrast (4.5:1 for normal text) and at least 3:1 for necessary control boundaries and focus indicators against adjacent colours; verify every actual state and background. Respect high contrast and reduced motion.

## Prompt for an AI assistant

> Build this custom or generative page to fit inside the existing model-driven app. Use the semantic tokens and component guidance in this document as the light-theme baseline; reuse the host theme and supported native components where available. Do not recreate the host navigation or command bar. Keep the UI compact, responsive and keyboard accessible. Implement and verify hover, focus, disabled, loading, empty and error states, including contrast. Adapt any token that does not match the target environment, and identify assumptions rather than presenting these values as official platform tokens.
