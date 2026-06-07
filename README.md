# SecureLink LTD Static Website

This is a simple static website for **SecureLink LTD**. It uses only HTML, CSS and JavaScript, so it can be uploaded directly to GoDaddy cPanel hosting.

## Files included

- `index.html` - the website content and page structure
- `style.css` - the design, layout and mobile responsive styles
- `script.js` - the mobile menu and enquiry form email behaviour
- `README.md` - these instructions

## 1. How to run the website locally on your Mac

No installation is needed.

1. Open Finder.
2. Go to the folder containing these files.
3. Double-click `index.html`.
4. The website should open in your default browser.

You can also right-click `index.html`, choose **Open With**, then choose Safari, Chrome or another browser.

## 2. How to open it in a browser

The easiest way is to double-click `index.html`.

If you edit the website and do not see your changes, refresh the browser:

- Safari: press `Command + R`
- Chrome: press `Command + R`
- Hard refresh in Chrome: press `Command + Shift + R`

## 3. How to edit text, email, phone number, logo and images

Open the files in a text editor such as TextEdit, VS Code, Sublime Text or any code editor.

### Edit website text

Most website wording is inside `index.html`.

Look for comments like:

```html
<!-- EDIT: Replace the placeholder phone and address below. -->
```

These comments show the safest places to change content.

### Edit email address

The enquiry form email is in `script.js`:

```js
const enquiryEmail = "support@securelinkltd.co.uk";
```

Change the email inside the quotation marks if needed.

Also check `index.html` for visible email links:

```html
support@securelinkltd.co.uk
```

### Edit company details

Company details are mainly in `index.html` near the contact section and footer.

Current details included:

```text
SecureLink LTD
Registered in England & Wales
Company No. 16666747
Registered office: 124 City Road, London, United Kingdom, EC1V 2NX
ICO Registered
support@securelinkltd.co.uk
www.securelinkltd.co.uk
```

Search for `Company No. 16666747` or `Registered office` in `index.html` to update these details if they ever change.

### Edit phone number

In `index.html`, find:

```html
Phone: <span>EDIT PHONE NUMBER</span>
```

Replace the placeholder text with your real phone number.

### Edit RetailQ wording

RetailQ wording is in `index.html`.

Search for:

```text
RetailQ, powered by SecureLink LTD
```

Edit that section if the RetailQ service changes. Keep the wording accurate and only mention features that are currently available.

### Replace the placeholder logo

The current logo is a simple `SL` placeholder in the header.

To replace it with the real SecureLink LTD logo:

1. Put your logo file in the same folder as `index.html`, for example `securelink-logo.png`.
2. Open `index.html`.
3. Find this line:

```html
<span class="brand-mark" aria-hidden="true">SL</span>
```

4. Replace it with:

```html
<img class="brand-logo" src="securelink-logo.png" alt="SecureLink LTD logo">
```

5. Open `style.css` and add this CSS:

```css
.brand-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
}
```

6. Upload the logo image with the other website files.

### Edit images

This version does not use real image files or paid assets. The visual blocks and icons are built with CSS in `style.css`.

If you later want to add a real image:

1. Put the image file in the same folder as `index.html`.
2. Add an image tag in `index.html`, for example:

```html
<img src="your-image.jpg" alt="SecureLink LTD CCTV installation">
```

3. Upload the image file together with the other website files.

## 4. How to upload to GoDaddy using cPanel File Manager

1. Log in to your GoDaddy account.
2. Open your hosting product.
3. Open **cPanel Admin**.
4. Open **File Manager**.
5. Open the `public_html` folder.
6. Upload the updated website files.
7. Make sure `index.html` is directly inside `public_html`.

## 5. Which files need to go into `public_html`

Upload these files into `public_html`:

- `index.html`
- `style.css`
- `script.js`

You can also upload `README.md`, but it is not required for the public website.

Important: the files should be directly inside `public_html`, not inside another folder.

Correct:

```text
public_html/index.html
public_html/style.css
public_html/script.js
```

Wrong:

```text
public_html/securelink-website/index.html
public_html/securelink-website/style.css
public_html/securelink-website/script.js
```

## 6. How to zip the files before upload

On your Mac:

1. Select `index.html`, `style.css`, `script.js` and optionally `README.md`.
2. Right-click the selected files.
3. Choose **Compress**.
4. A `.zip` file will be created.
5. Upload the `.zip` file to `public_html` in cPanel File Manager.
6. In cPanel, select the uploaded `.zip` file and click **Extract**.
7. Confirm the files appear directly inside `public_html`.

Do not zip the parent folder unless you are comfortable moving the files after extraction.

## 7. How to replace an existing Wix or old website if needed

If your domain currently points to Wix, you may need to update your domain DNS settings so it points to your GoDaddy hosting.

General steps:

1. Back up the old website files if there are any in `public_html`.
2. Remove or rename the old `index.html` file in `public_html`.
3. Upload the new `index.html`, `style.css` and `script.js`.
4. Check that your domain opens the new website.
5. If the domain still shows Wix, check the DNS settings in GoDaddy.

If you are unsure, contact GoDaddy support before changing DNS records.

## 8. Common mistakes to avoid

- Uploading the folder instead of the files.
- Forgetting to put `index.html` directly inside `public_html`.
- Renaming `index.html` to something else.
- Uploading `style.css` or `script.js` but leaving them inside a subfolder.
- Editing the email in `index.html` but forgetting to edit `script.js`.
- Not refreshing the browser after making changes.
- Deleting old website files without keeping a backup.
- Expecting the form to store messages. It does not store data; it opens the visitor's email app using `mailto:`.

## Notes about the enquiry form

The enquiry form is front-end only. It does not use a backend, database or paid service.

When a visitor submits it, their email app opens with a prepared message to:

```text
support@securelinkltd.co.uk
```

This is suitable for simple static hosting, but visitors must have an email app configured on their device.
