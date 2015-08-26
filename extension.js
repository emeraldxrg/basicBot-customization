(function () {
    //Link location of your fork so you don't have to modify so many things.
    var fork = "ZoltofLightning";
		
    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:
         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }
         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "RGxBot",
        language: "english",
        startupCap: 15, // 1-200
        startupVolume: 25, // 0-100
        startupEmoji: true, // true or false
        autowoot: true,
        autoskip: true,
        cmdDeletion: true,
        chatLink: "https://rawgit.com/ZoltofLightning/basicBot/master/lang/en.json",
        maximumAfk: 90,
        afkRemoval: false,
        maximumDc: 120,
        bouncerPlus: true,
        blacklistEnabled: false,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: false,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 2,
        timeGuard: false,
        maximumSongLength: 7,
        autodisable: false,
        commandCooldown: 0,
        usercommandsEnabled: true,
        lockskipPosition: 1,
        lockskipReasons: [
            ["genre", "This song does not fit the genre of this community. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song was played recently. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "],
            ["rekt", "You just got rekt m8. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Temporary Message of the Day",
        filterChat: false,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: "http://prntscr.com/85qacf",
        themeLink: "Any Genre",
        fbLink: null,
        youtubeLink: null,
        website: "http://rangers-gaming.com/forum",
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            Banned: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/Banned.json",
            Overplayed: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/Overplayed.json",
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/ZoltofLightning/basicBot/master/basicBot.js", extend);

}).call(this);
