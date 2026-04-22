# Familiar-Project
 mddn 242 project 2

AI used: Clause using Sonnet 4.6
font used: https://fonts.google.com/selection/embed

For simplicity i will call the familiar a goober until it has been given a 'shape'/ name

Response to the brief:
im very excited about this project. I think its a fun idea to create a little goober and designing it in a way that affects how the user feels/ interacts with the goober. Im also very excited about working in p5js again since I understand how it works (its where i learned my current coding skills so im comfy here) which means that I dont have to rely on and use AI too much throughout this project but can also do a lot myself. Yes using AI might make the process quicker but my goal is to learn how to code so im using this project as a learning opportunity and only using AI when i get stuck or take too much time on a task that it starts negatively affecting the timeline of my project.

Notes:
19/04
    To be very honest i feel very discouraged about this project at the moment. I think the main issue is that the course isnt what i was hoping it to be, which was to learn how to code these things. I really just hate having to use AI and having the feeling that I rely on it because the actual coding isnt being taught and it isnt possible to do the project without using AI (unless i make my idea really small) because it will be too out of scope and take too much time. It is such a stupid dilemma and I really dont know how to deal with it. To be completely honest i just want to give up because this doesnt feel 'worth it'. I would rather spend my time learning how to do the code so that i know how it works and can understand everything rather than spending it making something with AI that I know I wont be happy with since i cant really use it to achieve my 'goal'. I also dont think i'll be using any of these projects in my portfolio because I am not at all proud of using AI to make things. I think the true value behind things is when human effort and care and knowledge has been put into a project. I do think that I wouldnt be feeling as strongly about this if I already knew how to do the steps and rather use AI to make it quicker so that i can focus on other stuff but because i know 'nothing' about what im actually doing/ what the AI is doing. 
    My current plan is to just take a way simpler idea and see what i can do myself and still use this as a learning opportunity in some way so that i actually gain something from this rather than juts doing something just to hand it in for the project. My idea is to use AI to teach me how to do it but then i still do the actual coding myself using what the AI made as a guide for how different things work. I fins this quite a shame because it take the opportunity and job away from a real person who could teach me this but that doesnt seem to be a proper option at the moment so I will try to do the best out of what i have.
    As much as I appreciate how cool AI could be and how it can be used to help us achieve more things, i really really hate the opportunities it is taking away from us, especially in a learning field.



idea 1:
I want to have a goober that lives in the PC of my website (from project 1) which helps the user be 'productive' by rewarding them for doing tasks. 
![alt text](Images-ReadMe/Idea-1.png)
However after a lot more thinking and iterating the idea ive realized that it is way too big for the scope of this project. I could scale it down by removing parts (like the built in word and other applications) but i wouldnt enjoy it as much since there are just so many more idea i have for it. I also worry that it will be too much like 'focus friend' or 'finch'. 


idea 2:
have a goober that responds to how the user is feeling and helps look after them
![alt text](Images-ReadMe/Idea-2.png)

Goober communicates to user through 'translator device' on screen and makes a small noise every time they say something --------------------------------------------------------------------

When user presses on goober, goober asks how they can help:
    - log a feeling
        ⤷ goober encourages user and suggests things for user to do depending on the feeling
        ⤷ goober changes colour depending on feeling, turns dark grey when feeling hasnt been loged in 6/8 hours
    - log things they like to do
        ⤷ Goober refers to this when suggesting things
    - share food
        ⤷ user tells goober what food they had (show picture?)
        ⤷ goober could ask and log the users enjoyment of the food to refer to later
        ⤷ brings down 'Hunger meter'
    - ask goober for help
        ⤷ task help: suggests things to do depending on users feeling,
        ⤷ feeling down: goober compliments and encourages user to keep going and shares 'happy facts' to hopefully cheer up user, also asks if they want 'task help'
        ⤷ food help: suggests different meals (links recipes?) from 'goober existing data base' or from what user has added to 'food log'
    - user shares that they are proud of themselves for something

potential stuff:
    -user can choose 2 emotions and have goober be a gradient?
    - check calender 
        ⤷ shows how user was feeling on certain days. when pressing on specific day, expands to show all feelings, what user did (suggestions followed), what food they had etc.
    
Want Meter:
    -the higher it is the more goober wants to check in with user
        ⤷ moves around more and 'calls out' to get users attention
    -increases over time
        ⤷ bumps up a bit when user doesnt like goobers suggestions
        ⤷ increases quicker when food meter hits max
    -decreases when user interacts with goober
        ⤷ big decrease when user accepts/ dose goobers suggestion
        ⤷ big decrease when food meter is reset

Hunger Meter:
    - starts going up at set time during the day e.g. at 8am for breakfast, 1pm for lunch and 6pm for dinner (these times could be set by the user to fit their habits)
        ⤷ as meter goes up, goober starts to let user know that they are hungry with the frequency increasing as the meter incases. (goobers expression will also change and tummy grumbles can be heard)
    - hits max 2 hours after starting
        ⤷ when max is hit, goober starts to 'riot' for food, holding up a sign and pacing from side to side, making noise
    - meter gets reset when user 'shares food' (by pressing on the goober and telling them what food they had), goober says thanks for sharing food and has happy expression. 

List of feelings: (these could be customizable by user)
    - tired (orange) #fccd77
    - angry (red) #fc7777
    - annoyed (magenta) #d677fc
    - bored (deep purple) #9f77fc
    - sad (blue) #66a2fd
    - distracted (light blue) #80eafd
    - overwhelmed (cyan) #4ec9a4
    - panic/scared (dark green) #87c951
    - excited (lime) #a5eb64
    - happy (yellow) #effc77
    - neutral/calm (white/cream) #fff5de


Goobers States:
    -Riot State:
        ⤷ goober holds up a sign with what it wants and is pacing from side to side of screen, making lots of noise
    -Reactions:
        ⤷ contempt/ neutral face when goober is just floating about :)
        ⤷ happy face- when user interacts with goober :D
        ⤷ sad face- when user doesnt accept goobers suggestions :(
        ⤷ upset/ angry face- when in riot mode >:(
    -Colour state:
        ⤷ changes depending on how user is feeling
        ⤷ goes dark grey when feelings arent logged in 6/8 hours 
    -Curious state over 3 hours
        ⤷ not curious = all normal
        ⤷ 0.25 curious = makes noise every 20min
        ⤷ 0.5 curious = comes close to screen and makes noise every 20min
        ⤷ 0.75 curious = starts slowly walking from side to side, makes noise every 10min
        ⤷ max curious = 'riot state' actives
    -Hunger state over 2 hours 
        ⤷ not hungry = all normal
        ⤷ 0.25 hungry = lets user know they are hungry/ makes noise every 20min
        ⤷ 0.5 hungry = tummy starts making grumbly noise every 20min. makes noise every 15min
        ⤷ 0.75 hungry = starts slowly walking from side to side, tummy grumble every 10min, makes noise every 7min
        ⤷ max hungry = 'riot state' actives



Starting to work:
    I was initially very overwhelmed and didnt know where to start. I tried to strip the given files down to bare bones so that I could make my own creation but it was really hard to tell what was needed and what wasnt and i kept getting really frustrated and almost panicky because i didnt know what almost any of the code meant/ did which made me feel very discouraged.

    My 'solution' (which im not a big fan of but couldnt think of another way) was to ask Claude for help (since we are supposed to be working with AI anyway). I asked it to help me make some basic starting files:
        Hi there!
        I want to do a coding project. can you help me set up some basic files so that i can work from them easily? 
        I want to have an html files that loads a canvas from a sketch.js which runs off p5js. I also want to have a style.css file which i can use to format/ style things.  
        Please let me know if you need more information.
    i then asked it to include the 'mobile' code from the files provided on nuku since i think that is important. 
    ![alt text](<Images-ReadMe/AI created- basic start files.png>) <- rough screen shot of the files claude provided me with


