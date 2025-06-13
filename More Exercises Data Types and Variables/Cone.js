function cone (radius, height) {
    let volume = (1 /3) * Math.PI * (radius ** 2) * height;
    console.log(`volume = ${volume.toFixed(4)}`);
    let side = Math.sqrt((height ** 2) + (radius ** 2));
    let baseArea = Math.PI * (radius ** 2);
    let aroundArea = Math.PI * radius * side;
    let allArea = baseArea + aroundArea;
    console.log(`area = ${allArea.toFixed(4)}`);
}
cone(3,5)