//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURMS0lPRE53Si9qVEJ6WlFMM3d0OHRVTFFIZDN6NHRIYUFxbHd2eWJHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXd0a0greDFKVHUycmtpaXlkY1g0TGljUnVNTDIrNThINnEzSkxaQ254bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRTRqNlhBSTNDVjJZZVhTblRUZ2JQVlkvU3I2RjE4M0R0L0RYK1FtSEZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDaGhsdWVUYlV2a1k5OHkzNERsVnBvc2dtd0xqL3N2azdnNG9QN2NoeG1RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVOZEdndXR2bzZ5L204V2k5MGZtdFlKUE80Zy9zdE5sM09wZytGWXB4Rlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjcrTlJ2SkhyOE9FS2RlbWZ3T1h4VlNMVUw2YlY4c2IzSjduNmw4YVczRWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtTTGNpWW95b1hMOXYrSmJWRnFUVUVHMS84ZERPcE9ONDk0Zm45MkRucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM29iUVFCRkYrdnZaMk1sSTR4VHh2UC8wUnVEaDhOSWxlK3R0MzhKbk5rST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZHMmFWaCtXdis0QUppV24yU2dBQ0ZCSUdpc280REUzYjB0TXlCdVJGRWYxSmVNSjhtcldQb0R2WFVva05uSUl0bVpRNjlKaDl3Z3ZyVjJRUnNNcWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYyLCJhZHZTZWNyZXRLZXkiOiJHcjRnaXpyTGxBTnZDK2J6UGZsWThBUW5GdXV5VFBiYmxzV1IyUGRiZHBVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhNGg1eFVyQ1NTR0t6SUdIYzk4dXBBIiwicGhvbmVJZCI6IjIwZTM3MjhiLTAyMzctNDQwZC04NmRiLWJlODAxNzg4M2Q2YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4ejlWN3Y1djRTQlVTMm5rWHhMUHErMFRuams9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHV3dVpJb3dtaG1DQzUwV0lPSUZockxTWVU0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJTNzMxUUhYIiwibWUiOnsiaWQiOiI5NDc3MjA0Njg3Mjo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Is+fIPCdl6ogMCA5IPCdl6EgMyAhIPCdl6UgMSDjga8iLCJsaWQiOiIxNTczNDIzMDE3Mjg4MDE6NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tPZCtkb0dFTktxK01VR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjdybFozMDZoU2gvQ2pyK3d1RHo4Tlo1UExYUHNqS1dDOU9nQXY1NG1DQXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJ0MnpTaE5KekdxWlFGRnNndGwxLzUxL1dqbHROdFFSZXZLMXFiTHp1cWRjdDM1b1ZXN1NGd2ZaWkwyQlFubkJHaW40QmpLRWRqNkp1bG16VW9sNUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwT0g2RVZEZEZ4T0R3TjM0aStobktvaFQ4cW5UN3V5c1UwZG5WU2lWdmdWellxdEhoZHlZaWdCUmZSWE4xZGJrNE9CZ0hvc3plZzJvbGJaNUNPZXJpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzcyMDQ2ODcyOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZTY1V2Q5T29Vb2Z3bzYvc0xnOC9EV2VUeTF6N0l5bGd2VG9BTCtlSmdnTSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3Mjg3Nzc2LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZCcCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94772046872",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
