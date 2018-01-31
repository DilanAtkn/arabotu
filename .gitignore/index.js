const Discord = require('discord.js');
const bot = new Discord.Client();

const chanRecherche = "<#408102841849348097>";

//constantes rangs
const rangPlat = " <@&407082593188577291>";
const rangDiamant = " <@&407057789647585280>";
const rangOr = " <@&407083205917802497>";
const rangArgent = " <@&407083496419491842>";
const rangBronze = " <@&407083723687854080>";

bot.on('ready', () => {
    bot.user.setActivity("?ara", { type: "LISTENING" }).then();
})


function Majuscule(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


bot.on('message', function (message) {

    
    var autheur = "<@"+message.member.id+">";


    if (message.channel.id == "408102841849348097")
    {
        
        if (message.content == "?ara")
        {
            message.channel.send("__Reklam modeli " + chanRecherche + " kanalında kullanmak için :__ \n \n " + autheur + ", şu şekildedir :  ```?ara [NB_KISI] [TAKIM] [MAC_TIPI] [RANKLAR]``` \n \n Mesela :  ```?ara 3 Lima Ranked @Gold @Platine ``` \n Iyi oyunlar !")
        }
        else if(message.content.startsWith("?ara"))
        {
            var temp = new Array();
            temp = message.content.split(' ');

            var nbJoueurs = temp[1];
            var salon = Majuscule(temp[2]);
            var typeMatch = Majuscule(temp[3]);

            var grades = "";
            for (i = 4; i < temp.length; i++) {

                if (temp[i] == rangDiamant.substr(1)) {
                    grades += rangDiamant;
                }

                if (temp[i] == rangArgent.substr(1)) {
                    grades += rangArgent;
                }

                if (temp[i] == rangPlat.substr(1)) {
                    grades += rangPlat;
                }

                if (temp[i] == rangBronze.substr(1)) {
                    grades += rangBronze;
                }
                

                if (temp[i] == rangOr.substr(1)) {
                    grades += rangOr;
                }
            }


            //?Ara 2 lima @Gold @Platinum
            var id = message.member.id;
            message.channel.send(":loudspeaker: " + autheur + " oyuncu arıyor \n :black_circle: Takım : " + salon + " \n :black_circle: Kalan yer : " + nbJoueurs + "\n :black_circle: Istenen Rank :" + grades + "\n :black_circle: Maç tipi : " + typeMatch);

            message.delete();

        }
    }

    

});



bot.login('NDA3NjU0NjU0OTY5Nzc0MDgw.DVEpiQ.0QG--o08DsXbJ0pdSBoM1JNfoGk');

