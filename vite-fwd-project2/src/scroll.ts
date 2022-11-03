import scooter1 from "/images/kids-scooter.png"
import scooter2 from "/images/grass-scooter.png"
import scooter3 from "/images/pipe-scooter.png"

export function changeImage(element: HTMLImageElement) {
    let images: string[] = [scooter1, scooter2, scooter3];
    let index: number = 0;
    const change = () => {
    // element.src = images[index];
    element.setAttribute("src", images[index]);
    index++;
    if (index >= images.length) {
        index = 0;
    }
    console.log(index);
}
change();
setInterval(change, 3000);
}