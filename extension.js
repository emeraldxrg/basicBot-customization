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
      chatLink: "https://rawgit.com/MamaEmerald/basicBot/master/lang/en.json",
      scriptLink: "https://rawgit.com/MamaEmerald/basicBot/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 1, // 1-200
      startupVolume: 0, // 0-100
      startupEmoji: false, // true or false
      autowoot: true,
      autoskip: true,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 180,
      afkRemoval: false,
      maximumDc: 10,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: true,
      maximumLocktime: 10,
      cycleGuard: true,
      maximumCycletime: 10,
      voteSkip: true,
      voteSkipLimit: 1,
      historySkip: false,
      timeGuard: true,
      maximumSongLength: 10,
      autodisable: false,
      commandCooldown: 0,
      usercommandsEnabled: true,
      skipPosition: 0,
      skipReasons: [
      ["theme", "This song does not fit the room theme. "],
      ["op", "This song is on the OP list. "],
      ["history", "This song is in the history. "],
      ["mix", "You played a mix, which is against the rules. "],
      ["sound", "The song you played had bad sound quality or no sound. "],
      ["nsfw", "The song you contained was NSFW (image or sound). "],
      ["unavailable", "The song you played was not available for some users. "]
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
      themeLink: null,
      fbLink: null,
      youtubeLink: null,
      website: "http://rangers-gaming.com/forum",
      intervalMessages: [],
      messageInterval: 5,
      songstats: false,
      commandLiteral: "!",
      blacklists: {
        NSFW: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/NSFWlist.json",
        OP: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/OPlist.json",
        BANNED: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/BANNEDlist.json"
      }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/emeraldxrg/basicBot/master/basicBot.js", extend);

}).call(this);
