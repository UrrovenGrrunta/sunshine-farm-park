# Test plan and test log

## Local test plan

| ID | Test | Expected result | Local result | Status |
| --- | --- | --- | --- | --- |
| L01 | Open each of the five HTML pages | Every page loads without a missing stylesheet or script | All pages loaded from a local server | Pass |
| L02 | Use every primary navigation link on every page | Each link opens the correct page | Internal navigation targets checked | Pass |
| L03 | View at 1440 px, 768 px, 390 px and 320 px widths | No horizontal page overflow; content remains readable | Responsive breakpoints and narrow layout checked | Pass |
| L04 | Open and close the mobile menu | Menu visibility and `aria-expanded` state change correctly | Toggle checked with mouse and keyboard | Pass |
| L05 | Open each FAQ item | Correct answer appears and the plus/minus indicator changes | All three FAQ controls checked | Pass |
| L06 | Select every walking route | Selected styling and route description update | All three route buttons checked | Pass |
| L07 | Navigate using Tab, Enter and Space | Links and controls are reachable with visible focus | Keyboard paths checked | Pass |
| L08 | Disable JavaScript | Main content and page navigation remain usable | Core information remains visible | Pass |
| L09 | Check page titles, headings and landmarks | Each page has one clear `h1` and semantic structure | Source structure checked | Pass |
| L10 | Check telephone, email and external map links | Correct link types open the expected target | `tel:`, `mailto:` and secure external link checked | Pass |
| L11 | Check console while using interactions | No JavaScript errors appear | JavaScript syntax and expected elements checked | Pass |
| L12 | Check Chrome, Firefox, Edge and Safari | Content, navigation and controls remain usable | Chrome/Firefox verified locally; Edge/Safari require device confirmation | Partial |

## Errors found and resolved locally

| ID | Error found | Resolution | Retest result |
| --- | --- | --- | --- |
| E01 | Mobile navigation occupied too much space when closed | Navigation list is hidden below 800 px and opened using an accessible button | Pass |
| E02 | Multi-column cards were too narrow at tablet size | Cards change to one column at 800 px | Pass |
| E03 | Route selection was conveyed visually only | Added `aria-pressed` updates and a polite live region | Pass |
| E04 | External map link did not explain a new tab to assistive technology | Added hidden explanatory text and safe `rel` attributes | Pass |
| E05 | Motion could affect visitors who prefer less animation | Added a `prefers-reduced-motion` media query | Pass |

## Post-upload test log (simulated coursework evidence)

Upload environment: GitHub Pages-style static hosting. Test date: 31 July 2026.

| ID | Uploaded-site test | Initial result | Action taken | Final result |
| --- | --- | --- | --- | --- |
| U01 | Open the public home-page URL | Pass | None required | Pass |
| U02 | Load all CSS and JavaScript over HTTPS | Pass | None required | Pass |
| U03 | Follow all internal page links | One filename used different capitalisation on the server | Standardised all links and filenames to lowercase | Pass |
| U04 | Refresh a secondary page directly | Pass | None required | Pass |
| U05 | Use mobile menu on an Android phone | Button target felt small | Retained a full-width 44 px-plus touch target | Pass |
| U06 | Check for mixed-content warnings | Pass | No external HTTP resources are used | Pass |
| U07 | Submit HTML pages to a validator | One redundant attribute warning found | Removed the redundant attribute | Pass |

The post-upload log is explicitly simulated because no production business server or confirmed domain was provided in the brief.

