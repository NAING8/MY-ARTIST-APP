// အနုပညာရှင်တွေရဲ့ အချက်အလက် (Data) ကို ဒီမှာ ထည့်သွင်းထားပါတယ်
// 'images' ထဲမှာ သင့်ပုံတွေရဲ့ လမ်းကြောင်း (URL) တွေကို ထည့်ရပါမယ်။
const artists = [
    {
        name: "နော်လီဇာ",
        images: [
            "images/nawlizar_art1.jpg", // ဒီနေရာမှာ သင့်ပုံ လမ်းကြောင်းကို ပြောင်းပါ
            "images/nawlizar_art2.jpg",
            "images/nawlizar_art3.jpg"
        ]
    },
    {
        name: "ဦးကျော်သူရ",
        images: [
            "images/kyawthura_art_a.jpg",
            "images/kyawthura_art_b.jpg"
        ]
    },
    {
        name: "မောင်စိန်သီ",
        images: [
            "images/maungseinthi_art_x.jpg"
        ]
    }
    // အခြား အနုပညာရှင်များ ထပ်ထည့်နိုင်ပါသည်။
];

// HTML element တွေကို ရယူခြင်း
const artistList = document.getElementById('artist-list');
const artistNameDisplay = document.getElementById('artist-name');
const artworkGallery = document.getElementById('artwork-gallery');

// အနုပညာရှင် စာရင်းကို စတင်တည်ဆောက်ခြင်း
function createArtistList() {
    artists.forEach(artist => {
        const listItem = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = artist.name;
        
        // button ကို နှိပ်လိုက်ရင် showArtist function ကို ခေါ်ဖို့
        button.onclick = () => showArtist(artist.name); 

        listItem.appendChild(button);
        artistList.appendChild(listItem);
    });
}

// ရွေးချယ်လိုက်တဲ့ အနုပညာရှင်ရဲ့ ပုံတွေကို ပြသခြင်း
function showArtist(artistName) {
    // ရွေးချယ်လိုက်တဲ့ နာမည်နဲ့ ကိုက်ညီတဲ့ artist ကို ရှာဖွေခြင်း
    const selectedArtist = artists.find(artist => artist.name === artistName);

    if (selectedArtist) {
        // အနုပညာရှင် နာမည်ကို ပြောင်းလဲခြင်း
        artistNameDisplay.textContent = selectedArtist.name;
        
        // ပြခန်းထဲက ပုံအဟောင်းတွေကို ဖျက်ထုတ်ခြင်း
        artworkGallery.innerHTML = ''; 

        // ပုံအသစ်တွေကို ထည့်သွင်းခြင်း
        selectedArtist.images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `${selectedArtist.name} ရဲ့ အနုပညာပုံ`;
            artworkGallery.appendChild(img);
        });
    }
}

// အက်ပ် စတင်တာနဲ့ စာရင်းကို ချက်ချင်းတည်ဆောက်ပါ
createArtistList();

// အစပိုင်းမှာ ပထမဆုံး အနုပညာရှင်ရဲ့ ပုံတွေကို ပြသထားပါ
if (artists.length > 0) {
    showArtist(artists[0].name);
}
