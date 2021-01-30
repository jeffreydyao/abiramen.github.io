const line1 = '// i study computer science.';
const line2 = '// also i really like ramen.';
const base_speed = 40;

let char_count = 0;

const typewrite = () => {
    let $ = document.querySelector.bind(document);
    if (char_count < line1.length + line2.length) {
        if (char_count < line1.length) {
            $('#cursor-2').style.display = 'none';
            $('#splash-line1').innerHTML += line1[char_count];
        } else {
            $('#cursor-1').style.display = 'none';
            $('#cursor-2').style.display = 'inline-block';
            $('#splash-line2').innerHTML += line2[char_count - line1.length];
        }
        char_count++;
        setTimeout(typewrite, base_speed * (1 + Math.random()) + (char_count == line1.length) * 400);
    }
};

typewrite();
