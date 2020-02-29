const prompts = [
    {
        quote: "It is impossible for a man to learn what he thinks he already knows.",
        author: "Epictetus"
    },
    {
        quote: "We all love ourselves more than other people, but care more about their opinion than our own.",
        author: "Marcus Aurelius"
    },
    {
        quote: "You shouldn't give circumstances the power to rouse anger, for they don't care at all.",
        author: "Marcus Aurelius"
    },
    {
        quote: "Your mind will take the shape of what you frequently hold in thought for the human spirit is colored by such impressions.",
        author: "Marcus Aurelius"
    },
    {
        quote: "To live the good life: We have the potential for it. If we can learn to be indifferent to what makes no difference.",
        author: "Marcus Aurelius"
    },
    {
        quote: "We have two ears and one mouth so that we can listen twice as much as we speak.",
        author: "Epictetus"
    },
    {
        quote: "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
        author: "Marcus Aurelius"
    },
    {
        quote: "It is the power of the mind to be unconquerable.",
        author: "Seneca"
    },
    {
        quote: "Sometimes even to live is an act of courage.",
        author: "Seneca"
    },
    {
        quote: "Luck is what happens when preparation meets opportunity.",
        author: "Seneca"
    },
    {
        quote: "Difficulties strengthen the mind, as labor does the body.",
        author: "Seneca"
    },
    {
        quote: "There is no easy way from the earth to the stars.",
        author: "Seneca"
    },
    {
        quote: "Hang on to your youthful enthusiasms -- you’ll be able to use them better when you’re older.",
        author: "Seneca"
    },
    {
        quote: "Begin at once to live, and count each separate day as a separate life.",
        author: "Seneca"
    },
    {
        quote: "No man was ever wise by chance.",
        author: "Seneca"
    },
    {
        quote: "We suffer more often in imagination than in reality.",
        author: "Seneca"
    },
    {
        quote: "Most powerful is he who has himself in his own power.",
        author: "Seneca"
    },
    {
        quote: "As long as you live, keep learning how to live.",
        author: "Seneca"
    },
    {
        quote: "It is difficult to bring people to goodness with lessons, but it is easy to do so by example.",
        author: "Seneca"
    },
    {
        quote: "There is no good or bad without us, there is only perception. There is the event itself and the story we tell ourselves about what it means.",
        author: "Ryan Holiday"
    },
    {
        quote: "In life, it doesn’t matter what happens to you or where you came from. It matters what you do with what happens & what you’ve been given.",
        author: "Ryan Holiday"
    },
    {
        quote: "Think progress, not perfection.",
        author: "Ryan Holiday"
    },
    {
        quote: "The Obstacle is the way.",
        author: "Ryan Holiday"
    },
    {
        quote: "We must give up things to which we are addicted considering them to be good. Otherwise courage will vanish which should test itsef.",
        author: "Seneca"
    },
    {
        quote: "It's possible to start living again! See things anew as you once did. That is how to restart life!",
        author: "Marcus Aurelius"
    },
    {
        quote: "A real man doesn't give way to anger & discontent & such a person has strength, courage & endurance unlike the angry and complaining.",
        author: "Marcus Aurelius"
    },
    {
        quote: "Who then is invincible? The one who cannot be upset by anything outside their reasoned choice.",
        author: "Epictetus"
    },
    {
        quote: "For to be wise is only one thing- to fix our attention on our intelligence which guides all things everywhere.",
        author: "Heraclitus"
    },
    {
        quote: "You shouldn't give circumstances the power to rouse anger, for they don't care at all.",
        author: "Marcus Aurelius"
    },
    {
        quote: "Your mind will take the shape of what you frequently hold in thought.",
        author: "Marcus Aurelius"
    },
    {
        quote: "Your mind is truly yours.",
        author: "Marcus Aurelius"
    },
    {
        quote: "First tell yourself what kind of person you want to be, then do what you have to do.",
        author: "Marcus Aurelius"
    },
    {
        quote: "If you want some good, get it from yourself.",
        author: "Epictetus"
    },
    {
        quote: "Where is Good? In our reasoned choices. Where is evil? In our reasoned choices. Where is neither of them? Outside our reasoned choices.",
        author: "Epictetus"
    },
    {
        quote: "Let us also produce some blod act of our own & join the ranks of most emulated.",
        author: "Seneca"
    },
    {
        quote: "Kindness is invincible, but only when it's sincere with no hypocrisy or faking.",
        author: "Marcus Aurelius"
    },
    {
        quote: "How much credence we give to the opinions our peers have of us and how little to our very own.",
        author: "Marcus Aurelius"
    },
    {
        quote: "What is your vocation? To be a good person.",
        author: "Marus Aurelius"
    },
    {
        quote: "Much more harmful are the consequences of anger and grief than the circumstances that aroused them in us!",
        author: "Marcus Aurelius"
    },
    {
        quote: "The reason why we have two ears and only one mouth is so we might listen more and talk less.",
        author: "Diogenes Laertius"
    },
    {
        quote: "The obstacle on the path becomes the way.",
        author: "Marcus Aurelius"
    },
    {
        quote: "Silence is the lesson learned from the many sufferings of life.",
        author: "Seneca"
    },
    {
        quote: "But there is no reason to live and no limit to our miseries if we let our fears predominate.",
        author: "Seneca"
    },
    {
        quote: "Whenever you suffer pain keep in mind that it's nothing to be ashamed of and that it can't degrade your intelligence nor keep it from acting raitonally.",
        author: "Marcus Aurelius"
    },
    {
        quote: "Dig deep within yourself, for there is a foundation of goodness every ready to flow if you will keep digging.",
        author: "Marcus Aurelius"
    },
    {
        quote: "This universe is change. Life is opinion.",
        author: "Marcus Aurelius"
    },
    {
        quote: "The greater danger for most of us is not that our aim is high and we miss it, but it is low and we hit it.",
        author: "Aristotle"
    },
    {
        quote: "When you're onto something great, it won't feel like revolution. It'll feel like uncommon sense.",
        author: "Derek Sivers"
    },
    {
        quote: "When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.",
        author: "Marcus Aurelius"
    },
    {
        quote: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
        author: "Marcus Aurelius"
    },
    {
        quote: "Our life is what our thoughts make it.",
        author: "Marcus Aurelius"
    },
    {
        quote: "The best revenge is not to be like your enemy.",
        author: "Marcus Aurelius"
    }
]

export default prompts;