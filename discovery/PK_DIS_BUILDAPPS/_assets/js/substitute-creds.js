function escape(htmlStr) {
    return htmlStr.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

}

function parseCredential(full, first, second, third, creds) {
    console.log("Replacing: " + full);
    if (third) {
        try {
            return escape(creds[first][third]);
        } catch (e) {
            return full;
        }

    } else {
        try {
            return creds[first];
        } catch (e) {
            return full;
        }
    }
}