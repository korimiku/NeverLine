let massive_Updates = [
    'NeverLine V1' ,
    'NeverLine V2',
    'Neverline V3',
    'Neverline V3.1',
    "NeverLine Recode V1",
    "NeverLine Recode V1.1",
];

let massive_updates_decription = [
    `[+] NeverLineClient<br>
    [+] FogColor<br>
    [+] FpsBooster<br>
    [+] DeathSounds<br>
    [+] WaterMark<br>
    [+] FriendPicture<br>
    [+] TotemSounds<br>
    [+] ParticlesDisabler<br>
    [+] HitSounds<br>
    [+] InventoryPercent<br>
    [+] BreakSoundя<br>
    [+] AnimatedInventory<br>
    [+] DeathParticles<br>
    [+] 3DTotem<br>
    [+] BackGrounds<br>
    [+] HitColor<br>
    [+] SkyChanger<br>
    [+] RenderDistance`,
    `[/]DeathParticles улучшил<br>[+]3Dtotems санта<br>[-]Backgrounds<br>[+]NewGui ставить выше главного модуля(NeverLineClient) добовляет новое гуи<br>[+]Skychanger Новогоднее небо`,
    `[+]TotemParticles<br>[/]Улучшил все партиклы<br>[+]TotemSounds Happy, Happy, Happy<br>[+]AnimatedInventory тянка`,
    `[/]FriendPicture пофиксил баг с вейтер маркой<br>
    [+]FriendPicture шеф,гуль,кот гуль<br>
    [-]FriendPicture logo<br>`,
    "[!] Редизайн",
    `[/] Переделал водяной знак <br> [/] Переделал бустер фпс`,
];

for(let i = 0; i < massive_Updates.length; i++) {
    let newh2 = document.createElement('h2');
    let textNodeh2 = document.createTextNode(massive_Updates[i]);
    newh2.appendChild(textNodeh2);
    document.body.appendChild(newh2);   
    let newp = document.createElement('p');
    newp.innerHTML = massive_updates_decription[i];
    document.body.appendChild(newp);   
}



let btn = document.querySelector(".btn-exit")


btn.addEventListener("click", function() {
    anime({
        targets: btn,
        translateY: [
            {value: -15, duration: 200},
            {value: 0, duration: 350}
        ],
        easing: "easeInOutQuad"
    });
    setTimeout(function() {location.href = "../NeverLine.html";}, 550);
})