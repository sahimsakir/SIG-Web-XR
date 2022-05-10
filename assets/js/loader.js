$(document).ready(function () {
    console.log("ready for scroll");

    let modelName = "combivita"
    document.title = "SIG | " + modelName;
    $("#exploreTitle").text("Łowicz w nowej odsłonie - w opakowaniu " + modelName + "!");
    $("#tabName").text(modelName);

    var modelDir = "assets/models/";

    // CX8 in 1l
    var modelTab_1 = [{
        'src': "0_Lowicz-cj15-1000ml-All.glb",
        'ios_src': "0_Lowicz-cj15-1000ml-All.usdz",
        'poster': "0_Lowicz-cj15-1000ml-All.webp",
        'alt': "cj15 family",
        'angles': "2.406deg 84.02deg",
        'title': "Łowicz w combivita",
    },
    {
        'src': "3_Lowicz-cj15-1000ml-D3.glb",
        'ios_src': "3_Lowicz-cj15-1000ml-D3.usdz",
        'poster': "3_Lowicz-cj15-1000ml-D3.webp",
        'alt': "cj15 1000ml",
        'angles': "-19.52deg 77.1deg",
        'title': "Mleko łowickie UHT 3,2% z witaminami",
    },
    {
        'src': "2_Lowicz-cj15-1000ml-3-2percent.glb",
        'ios_src': "2_Lowicz-cj15-1000ml-3-2percent.usdz",
        'poster': "2_Lowicz-cj15-1000ml-3-2percent.webp",
        'alt': "cj15 1000ml 3.2 percent",
        'angles': "-11.43deg 84.03deg",
        'title': "Mleko łowickie UHT 3,2%",
    },
    {
        'src': "1_Lowicz-cj15-1000ml-1-5percent.glb",
        'ios_src': "1_Lowicz-cj15-1000ml-1-5percent.usdz",
        'poster': "1_Lowicz-cj15-1000ml-1-5percent.webp",
        'alt': "cj15 1000ml 1.5 percent",
        'angles': "-13.54deg 81.62deg",
        'title': "Mleko łowickie UHT 1,5%",
    },

    ];
    var card_src = modelTab_1;



    // This is for 1st model load
    LoadeModel(0);

    // $('#hotspot-1').click(function () {
    //     console.log('1');
    //     LoadeModel(1);
    // });

    function switchSrc(index) {
        console.log(index);
        LoadeModel(index);
    }
    // this is for all model load after 1st model loaded.
    // loadnTabAllModels();

    // function loadnTabAllModels() {
    //     card_src.forEach((src, index) => {
    //         if (index > 0) {
    //             LoadeModel(index);
    //         }
    //     });
    // }

    function LoadeModel(index) {
        let newCard = $(".jq_card_clone").clone().removeClass("jq_card_clone hide");
        newCard.addClass("jq_remove_card");
        readyTheCard(newCard, index)
            .then((jq_card_clone) => {
                $("#root").append(jq_card_clone);
                cardIndex = 0;
            });
    }

    var cardIndex = 0;
    async function readyTheCard(clonedCard, index, angles) {
        console.log(index);
        let arNvisio = clonedCard.find("ar-nvisio");
        arNvisio.attr("src", modelDir + card_src[index].src);
        arNvisio.attr("ios-src", modelDir + card_src[index].ios_src);
        arNvisio.attr("poster", modelDir + card_src[index].poster);
        arNvisio.attr("camera-orbit", card_src[index].angles);
        arNvisio.attr("alt", card_src[index].alt);
        clonedCard.find(".title").text(card_src[index].title);
        clonedCard.attr("id", "model" + index)
        return clonedCard;
    }

});