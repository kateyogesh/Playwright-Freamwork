# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: shadow.spec.ts >> shadow dom handeling >> handle shadow dom on that page
- Location: tests\shadow.spec.ts:17:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('shadow_host')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('shadow_host') with timeout 5000ms
  - waiting for locator('shadow_host')

```

```yaml
- navigation:
  - text:  AutoPlay
  - list:
    - listitem:
      - link " Home":
        - /url: "#home"
    - listitem:
      - link " Forms":
        - /url: "#forms"
    - listitem:
      - link " Tables":
        - /url: "#tables"
    - listitem:
      - link " Popups":
        - /url: "#popups"
    - listitem:
      - link " Files":
        - /url: "#files"
    - listitem:
      - link " Advanced":
        - /url: "#advanced"
- heading " Data Entry Form" [level=3]
- text: Full name
- textbox "Full name":
  - /placeholder: John Doe
  - text: John Doe
- text: Email
- textbox "Email":
  - /placeholder: john@example.com
  - text: john@example.com
- text: Phone
- textbox "Phone":
  - /placeholder: +1 234 567 890
  - text: +1 234 567 890
- text: Address
- textbox "Address": 123 Main St, City
- text: Gender
- radio "Male"
- text: Male
- radio "Female"
- text: Female Days (checkboxes)
- checkbox "Mon"
- text: Mon
- checkbox "Tue"
- text: Tue
- checkbox "Wed"
- text: Wed
- checkbox "Thu"
- text: Thu
- checkbox "Fri"
- text: Fri
- checkbox "Sat"
- text: Sat
- checkbox "Sun"
- text: Sun
- button " Submit"
- heading " Dropdowns & more" [level=3]
- text: Country
- combobox:
  - option "India" [selected]
  - option "USA"
  - option "UK"
  - option "Germany"
  - option "France"
- text: Multi-select (hold Ctrl)
- listbox:
  - option "Red"
  - option "Blue" [selected]
  - option "Green"
  - option "Yellow"
- text: Fruit list
- combobox:
  - option "Apple" [selected]
  - option "Banana"
  - option "Mango"
  - option "Orange"
- text: Scrollable (infinite)
- listbox:
  - option "Item 1"
  - option "Item 2"
  - option "Item 3"
  - option "Item 4"
  - option "Item 5"
  - option "Item 6"
  - option "Item 7"
  - option "Item 8"
  - option "Item 9"
  - option "Item 10"
  - option "Item 11"
  - option "Item 12"
  - option "Item 13"
  - option "Item 14"
  - option "Item 15"
  - option "Item 16"
  - option "Item 17"
  - option "Item 18"
  - option "Item 19"
  - option "Item 20"
- heading " Date Picker (with navigation)" [level=3]
- text: Select the date
- textbox "mm/dd/yyyy"
- heading " Date Picker (with select)" [level=3]
- text: Select the date
- textbox "dd/mm/yyyy"
- heading " Date Range Selector" [level=3]
- textbox:
  - /placeholder: Start Date
- text: to
- textbox:
  - /placeholder: End Date
- button " Submit"
- heading " Static Web Table" [level=3]
- table:
  - rowgroup:
    - row "Product Name Category Price Stock Status":
      - columnheader "Product Name"
      - columnheader "Category"
      - columnheader "Price"
      - columnheader "Stock"
      - columnheader "Status"
  - rowgroup:
    - row "Laptop Electronics $999 15 In Stock":
      - cell "Laptop"
      - cell "Electronics"
      - cell "$999"
      - cell "15"
      - cell "In Stock"
    - row "Mouse Electronics $29 50 In Stock":
      - cell "Mouse"
      - cell "Electronics"
      - cell "$29"
      - cell "50"
      - cell "In Stock"
    - row "Keyboard Electronics $79 0 Out of Stock":
      - cell "Keyboard"
      - cell "Electronics"
      - cell "$79"
      - cell "0"
      - cell "Out of Stock"
    - row "Monitor Electronics $349 8 In Stock":
      - cell "Monitor"
      - cell "Electronics"
      - cell "$349"
      - cell "8"
      - cell "In Stock"
- heading " Web Table with CRUD" [level=3]
- table:
  - rowgroup:
    - row "# Name Role Action":
      - columnheader "#"
      - columnheader "Name"
      - columnheader "Role"
      - columnheader "Action"
  - rowgroup:
    - row "1 Alice Engineer Delete":
      - cell "1"
      - cell "Alice"
      - cell "Engineer"
      - cell "Delete":
        - button "Delete"
    - row "2 Bob Designer Delete":
      - cell "2"
      - cell "Bob"
      - cell "Designer"
      - cell "Delete":
        - button "Delete"
- textbox "Name"
- textbox "Role"
- button "+ Add"
- button "+ Dynamic"
- textbox "Search table..."
- heading " Dynamic System Processes Table" [level=3]
- table:
  - rowgroup:
    - row "Name Memory (MB) Network (Mbps) Disk (MB/s) CPU (%)":
      - columnheader "Name"
      - columnheader "Memory (MB)"
      - columnheader "Network (Mbps)"
      - columnheader "Disk (MB/s)"
      - columnheader "CPU (%)"
  - rowgroup:
    - row "System 31.5 MB 2.2 Mbps 0.16 MB/s 2.9%":
      - cell "System"
      - cell "31.5 MB"
      - cell "2.2 Mbps"
      - cell "0.16 MB/s"
      - cell "2.9%"
    - row "Firefox 30.2 MB 0.4 Mbps 0.41 MB/s 0.7%":
      - cell "Firefox"
      - cell "30.2 MB"
      - cell "0.4 Mbps"
      - cell "0.41 MB/s"
      - cell "0.7%"
    - row "Internet Explorer 96.4 MB 7.6 Mbps 0.65 MB/s 4.6%":
      - cell "Internet Explorer"
      - cell "96.4 MB"
      - cell "7.6 Mbps"
      - cell "0.65 MB/s"
      - cell "4.6%"
    - row "Chrome 81.5 MB 6.7 Mbps 0.61 MB/s 8.2%":
      - cell "Chrome"
      - cell "81.5 MB"
      - cell "6.7 Mbps"
      - cell "0.61 MB/s"
      - cell "8.2%"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 8.2%
  - text: "Memory Size of Firefox process:"
  - strong: 30.2 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 6.7 Mbps
  - text: "Disk space of Firefox process:"
  - strong: 0.41 MB/s
- heading " Alerts" [level=3]
- button "Simple"
- button "Confirm"
- button "Prompt"
- heading " Popups" [level=3]
- button "Popup"
- button "New Tab"
- button "New Window"
- heading " Toggle Button" [level=3]
- button "Start"
- button "Right Click Me"
- heading " File Upload" [level=3]
- text: Single
- button "Choose File"
- button "Upload Single File"
- paragraph
- text: Multiple
- button "Choose File"
- button "Upload Multiple Files"
- paragraph
- heading " File Download" [level=3]
- button " Download File"
- button "Open PDF"
- heading " Interactive Tooltip" [level=3]
- text: Hover me
- heading " Shadow DOM" [level=3]
- text: Mobiles Laptops
- link "Blog":
  - /url: https://www.pavantestingtools.com/
- textbox
- checkbox
- button "Choose File"
- link "Youtube":
  - /url: https://www.youtube.com/@sdetpavan/videos
- heading " SVG Elements" [level=3]
- paragraph: Basic Shapes
- img
- paragraph: Bar Chart
- img: A B C D E
- heading " Hover & Double Click" [level=3]
- button "Hover me"
- button "Double click"
- text: Field1
- textbox: Hello World!
- text: Field2
- textbox
- button "Copy Text"
- paragraph: Double‑click button to copy Field1 → Field2
- heading " Drag & Drop Interaction" [level=3]
- text: Drag me Drop zone
- heading " Range Slider" [level=3]
- slider: "50"
- text: "50"
- paragraph:
  - text: "Price range:"
  - textbox "Price range:": $75 - $300
- heading " Nested frames" [level=3]
- iframe
- heading " iframe (external)" [level=3]
- iframe
- separator
- text: Automation Playground
- link "@SDET-QA By Pavan":
  - /url: https://www.youtube.com/@sdetpavan
```

# Test source

```ts
  1  | 
  2  | 
  3  | import {test,expect} from '@playwright/test';
  4  | 
  5  | 
  6  | test.describe('shadow dom handeling', ()=>{
  7  | 
  8  | 
  9  | test("shadow dom handle ulr launch",async({page})=>{
  10 | 
  11 |   await page.goto('https://sdetqa.vercel.app/autoplay');
  12 | 
  13 | 
  14 | })
  15 | 
  16 | 
  17 | test('handle shadow dom on that page',async({page})=>{
  18 | 
  19 | 
  20 | await page.goto('https://sdetqa.vercel.app/autoplay');
  21 | 
  22 |  const logopage=  page.locator('.logo');
  23 | 
  24 |  await expect(logopage).toBeVisible();
  25 | 
  26 | 
  27 |  const heading=  page.locator('h3',{hasText:' Shadow DOM'});
  28 |  heading.scrollIntoViewIfNeeded();
  29 | 
  30 | 
  31 |  const host=page.locator('shadow_host');
> 32 | await expect(host).toBeVisible();
     |                    ^ Error: expect(locator).toBeVisible() failed
  33 | 
  34 | 
  35 | 
  36 | 
  37 | 
  38 | 
  39 | }
  40 | 
  41 | 
  42 | 
  43 | )
  44 | 
  45 | 
  46 | 
  47 | 
  48 | 
  49 | 
  50 | 
  51 | 
  52 | 
  53 | 
  54 | 
  55 | 
  56 | 
  57 | 
  58 | 
  59 | 
  60 | })
  61 | 
  62 | 
  63 | 
```