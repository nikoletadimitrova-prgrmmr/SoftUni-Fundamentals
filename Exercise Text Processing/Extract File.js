function extractFile(str) {
    let parts = str.split('\\');
    let fileWithExt = parts[parts.length - 1];

    let lastDotIndex = fileWithExt.lastIndexOf('.');

    let name = fileWithExt.slice(0, lastDotIndex);
    let extension = fileWithExt.slice(lastDotIndex + 1);

    let formattedName = name.charAt(0).toUpperCase() + name.slice(1);

    console.log(`File name: ${formattedName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')