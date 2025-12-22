async function getParticipantCredentials(){
    var path = "/api/odata/v4/participant/credentials(workshopId='";
    const regex = new RegExp(`${window.$docsify.code}-?([a-zA-Z0-9]{8})?`);
    const workshopShortId = document.documentURI.split('/')[3].match(regex)

    if (workshopShortId) {
      path += workshopShortId[1] + "')";
    } else {
      path += "00000000')";
    }

    // Get participant details
    const response = await fetch(path);
    const data = await response.json();

    return data.value;
}