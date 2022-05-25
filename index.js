const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let system = [0, -1];
let position = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
]
canvas.addEventListener("click", click);

function mainloop() {
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.fillStyle = "#000";
    ctx.fillRect(200, 0, 2, 606);
    ctx.fillRect(402, 0, 2, 606);
    ctx.fillRect(0, 200, 606, 2);
    ctx.fillRect(0, 402, 606, 2);
    ctx.font = "150px serif";
    if (position[0][0] === 0) ctx.fillText("〇", 25, 150);
    else if (position[0][0] === 1) ctx.fillText("✕", 38, 150);
    if (position[0][1] === 0) ctx.fillText("〇", 227, 150);
    else if (position[0][1] === 1) ctx.fillText("✕", 240, 150);
    if (position[0][2] === 0) ctx.fillText("〇", 429, 150);
    else if (position[0][2] === 1) ctx.fillText("✕", 442, 150);
    if (position[1][0] === 0) ctx.fillText("〇", 25, 357);
    else if (position[1][0] === 1) ctx.fillText("✕", 38, 352);
    if (position[1][1] === 0) ctx.fillText("〇", 227, 357);
    else if (position[1][1] === 1) ctx.fillText("✕", 240, 352);
    if (position[1][2] === 0) ctx.fillText("〇", 429, 357);
    else if (position[1][2] === 1) ctx.fillText("✕", 442, 352);
    if (position[2][0] === 0) ctx.fillText("〇", 25, 559);
    else if (position[2][0] === 1) ctx.fillText("✕", 38, 554);
    if (position[2][1] === 0) ctx.fillText("〇", 227, 559);
    else if (position[2][1] === 1) ctx.fillText("✕", 240, 554);
    if (position[2][2] === 0) ctx.fillText("〇", 429, 559);
    else if (position[2][2] === 1) ctx.fillText("✕", 442, 554);
    ctx.font = "48px serif";
    if (system[1] === -1) {
        (system[0] === 0) ? ctx.fillText("〇の番です", 188, 700): ctx.fillText("✕の番です", 188, 700);
    }
    if (system[1] === 1) {
        ctx.fillText("〇の勝ち！", 188, 700);
        alert("〇の勝ち！");
    }
    if (system[1] === 2) {
        ctx.fillText("✕の勝ち！", 188, 700);
        alert("✕の勝ち！");
    }
    if (system[1] === 3) {
        ctx.fillText("〇の勝ち！", 188, 700);
        alert("〇の勝ち！");
    }
    if (system[1] === 4) {
        ctx.fillText("✕の勝ち！", 188, 700);
        alert("✕の勝ち！");
    }
    if (system[1] === 5) {
        ctx.fillText("〇の勝ち！", 188, 700);
        alert("〇の勝ち！");
    }
    if (system[1] === 6) {
        ctx.fillText("✕の勝ち！", 188, 700);
        alert("✕の勝ち！");
    }
    if (system[1] === 7) {
        ctx.fillText("〇の勝ち！", 188, 700);
        alert("〇の勝ち！");
    }
    if (system[1] === 8) {
        ctx.fillText("✕の勝ち！", 188, 700);
        alert("✕の勝ち！");
    }
    if (system[1] === 9) {
        ctx.fillText("〇の勝ち！", 188, 700);
        alert("〇の勝ち！");
    }
    if (system[1] === 10) {
        ctx.fillText("✕の勝ち！", 188, 700);
        alert("✕の勝ち！");
    }
    if (system[1] === 11) {
        ctx.fillText("〇の勝ち！", 188, 700);
        alert("〇の勝ち！");
    }
    if (system[1] === 12) {
        ctx.fillText("✕の勝ち！", 188, 700);
        alert("✕の勝ち！");
    }
    if (system[1] === 13) {
        ctx.fillText("〇の勝ち！", 188, 700);
        alert("〇の勝ち！");
    }
    if (system[1] === 14) {
        ctx.fillText("✕の勝ち！", 188, 700);
        alert("✕の勝ち！");
    }
    if (system[1] === 15) {
        ctx.fillText("〇の勝ち！", 188, 700);
        alert("〇の勝ち！");
    }
    if (system[1] === 16) {
        ctx.fillText("✕の勝ち！", 188, 700);
        alert("✕の勝ち！");
    }
}

function click(e) {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    if (system[1] === -1) {
        if (x > 0 && x < 200 && y > 0 && y < 200 && position[0][0] === -1) {
            if (system[0] === 0) {
                system[0] = 1;
                position[0][0] = 0;
            } else {
                system[0] = 0;
                position[0][0] = 1;
            }
            check();
        } else
        if (x > 202 && x < 400 && y > 0 && y < 200 && position[0][1] === -1) {
            if (system[0] === 0) {
                system[0] = 1;
                position[0][1] = 0;
            } else {
                system[0] = 0;
                position[0][1] = 1;
            }
            check();
        } else
        if (x > 404 && x < 600 && y > 0 && y < 200 && position[0][2] === -1) {
            if (system[0] === 0) {
                system[0] = 1;
                position[0][2] = 0;
            } else {
                system[0] = 0;
                position[0][2] = 1;
            }
            check();
        } else
        if (x > 0 && x < 200 && y > 202 && y < 400 && position[1][0] === -1) {
            if (system[0] === 0) {
                system[0] = 1;
                position[1][0] = 0;
            } else {
                system[0] = 0;
                position[1][0] = 1;
            }
            check();
        } else
        if (x > 202 && x < 400 && y > 202 && y < 400 && position[1][1] === -1) {
            if (system[0] === 0) {
                system[0] = 1;
                position[1][1] = 0;
            } else {
                system[0] = 0;
                position[1][1] = 1;
            }
            check();
        } else
        if (x > 404 && x < 600 && y > 202 && y < 400 && position[1][2] === -1) {
            if (system[0] === 0) {
                system[0] = 1;
                position[1][2] = 0;
            } else {
                system[0] = 0;
                position[1][2] = 1;
            }
            check();
        } else
        if (x > 0 && x < 200 && y > 404 && y < 600 && position[2][0] === -1) {
            if (system[0] === 0) {
                system[0] = 1;
                position[2][0] = 0;
            } else {
                system[0] = 0;
                position[2][0] = 1;
            }
            check();
        } else
        if (x > 202 && x < 400 && y > 404 && y < 600 && position[2][1] === -1) {
            if (system[0] === 0) {
                system[0] = 1;
                position[2][1] = 0;
            } else {
                system[0] = 0;
                position[2][1] = 1;
            }
            check();
        } else
        if (x > 404 && x < 600 && y > 404 && y < 600 && position[2][2] === -1) {
            if (system[0] === 0) {
                system[0] = 1;
                position[2][2] = 0;
            } else {
                system[0] = 0;
                position[2][2] = 1;
            }
            check();
        }
    }
}

function check() {
    if (position[0][0] === position[0][1] && position[0][1] === position[0][2] && position[0][0] === 0) system[1] = 1;
    if (position[0][0] === position[0][1] && position[0][1] === position[0][2] && position[0][0] === 1) system[1] = 2;
    if (position[1][0] === position[1][1] && position[1][1] === position[1][2] && position[1][0] === 0) system[1] = 3;
    if (position[1][0] === position[1][1] && position[1][1] === position[1][2] && position[1][0] === 1) system[1] = 4;
    if (position[2][0] === position[2][1] && position[2][1] === position[2][2] && position[2][0] === 0) system[1] = 5;
    if (position[2][0] === position[2][1] && position[2][1] === position[2][2] && position[2][0] === 1) system[1] = 6;
    if (position[0][0] === position[1][0] && position[1][0] === position[2][0] && position[0][0] === 0) system[1] = 7;
    if (position[0][0] === position[1][0] && position[1][0] === position[2][0] && position[0][0] === 1) system[1] = 8;
    if (position[0][1] === position[1][1] && position[1][1] === position[2][1] && position[0][1] === 0) system[1] = 9;
    if (position[0][1] === position[1][1] && position[1][1] === position[2][1] && position[0][1] === 1) system[1] = 10;
    if (position[0][2] === position[1][2] && position[1][2] === position[2][2] && position[0][2] === 0) system[1] = 11;
    if (position[0][2] === position[1][2] && position[1][2] === position[2][2] && position[0][2] === 1) system[1] = 12;
    if (position[0][0] === position[1][1] && position[1][1] === position[2][2] && position[0][0] === 0) system[1] = 13;
    if (position[0][0] === position[1][1] && position[1][1] === position[2][2] && position[0][0] === 1) system[1] = 14;
    if (position[0][2] === position[1][1] && position[1][1] === position[2][0] && position[0][2] === 0) system[1] = 15;
    if (position[0][2] === position[1][1] && position[1][1] === position[2][0] && position[0][2] === 1) system[1] = 16;
}
setInterval(mainloop, 20);
