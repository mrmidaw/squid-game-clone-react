import React from "react";
import { Layout } from "../../layout/Layout";
import { motion } from "framer-motion";

export const Actors = () => {

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const actorsArr = [
        {
            id: 'sdgsrfgsrfd',
            name: 'Lee Jung - jae',
            plays: 'Seong Gi - hun',
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2021/09/Squid-Game-Lee-Jung-Jae-f9f69cc.jpg?webp=true&quality=90&resize=620%2C413',
            about: 'Who is Seong Gi-hun? Seong Gi-hun is a divorced gambling addict. He lives with his mother in a modest abode and soon finds out she has diabetes and needs surgery. When he hears about the secret game and its substantial cash prize, he decides to take part so he can settle his debts and pay for his mothers medical bills.'
        },
        {
            id: 'gssrthbrt',
            name: 'Park Hae-soo',
            plays: 'Cho Sang-woo',
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2021/09/SquidGame_Unit_108_0133-89895c3.jpg?webp=true&quality=90&resize=620%2C413',
            about: 'Who is Cho Sang-woo? Cho Sang-woo grew up poor alongside Seong Gi-hun. A gifted student, Cho Sang-woo eventually graduates from Seoul National University and becomes the head of an investment team. Unfortunately, he gets caught stealing money from his clients and is wanted from the police, so he decides to enter the game with Seong Gi-hun.'
        },
        {
            id: 'sgthmugv',
            name: 'HoYeon Jung',
            plays: 'Kang Sae-byeok',
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2021/09/SquidGame_Unit_108_0070-acc6180.jpg?webp=true&quality=90&resize=620%2C413',
            about: 'Who is Kang Sae-byeok? A North Korean defector, the resourceful Kang Sae-byeok joins the game in a bid to secure the money she needs to get the rest of her family out of North Korea and help her little brother, who is in an orphanage in Seoul. She is good with knife and a skilled pickpocket, both of which come in handy in the arena.'
        },
        {
            id: 'trnth',
            name: 'Anupam Tripathi',
            plays: 'Abdul Ali',
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2021/09/Squid-Game-Abdul-Ali-ad38a5b.jpg?webp=true&quality=90&resize=620%2C413',
            about: 'Who is Abdul Ali? He is a migrant worker hailing from Pakistan who loses several fingers during an accident in the factory where he works. He was never compensated, and he volunteers to take part in Squid Game to provide for his wife and child and the rest of his family in Pakistan.'
        },
        {
            id: 'kjluids',
            name: 'Oh Young-soo',
            plays: 'Oh Il-nam',
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2021/09/SquidGame_Unit_101_216-91ec448.jpg?webp=true&quality=90&resize=620%2C413',
            about: 'Who is Oh Il-nam? The eldest player in Squid Game, Oh Il-nam, also known as player 001, joins the game after being diagnosed with a brain tumour. He soon strikes up a friendship with Gi-hun, who feels responsible for the Old Man in Squid Game – but hes not as helpless as he may seem at first glance.'
        },
        {
            id: 'gdfmjmawd',
            name: 'Heo Sung-tae',
            plays: 'Jang Deok-su',
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2021/09/SquidGame_Unit_101_603-8640cd8.jpg?webp=true&quality=90&resize=620%2C413',
            about: 'Who is Jang Deok-su? Seoul gangster Jang Deok-su has amassed quite the gambling debt and is on the run from his crime lord boss when he joins the game. He is not to be messed with, in case you didn’t guess that from the picture above.'
        },
        {
            id: 'ppmbgopw',
            name: 'Kim Joo-ryung',
            plays: 'Han Mi-nyeo',
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2021/09/SquidGame_Unit_107_0013-5154579.jpg?webp=true&quality=90&resize=619%2C413',
            about: 'Who is Han Mi-nyeo? Not much is known of the mysterious Han Mi-nyeo when she enters the game, other than the fact she’s a poor single mother – and intent on surviving at all costs.'
        },
        {
            id: 'wbcvzklvfdpo',
            name: 'Wi Ha-joon',
            plays: 'Hwang Jun-ho',
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2021/09/Squid-Game-Cop-cf0a351.png?webp=true&quality=90&resize=620%2C413',
            about: 'Who is Hwang Jun-ho? Hwang Jun-ho is a Seoul police officer whose missing brother is connected to the game. After an encounter with Gi-hun, Jun-ho goes undercover as a guard in the game.'
        },
        {
            id: 'dppmmaioenm',
            name: 'Lee Byung-hun',
            plays: 'The Front Man',
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2021/09/SquidGame_Unit_107_0295-6964a64.jpg?webp=true&quality=90&resize=620%2C413',
            about: 'Who is The Front Man? The Front Man is in charge of running the whole game. Like all those who work on the game, he wears a mask to maintain strict anonymity, with viewers not finding out who is beneath until episode eight.'
        },
        {
            id: 'wopqqpimnf',
            name: 'Lee Yoo-mi',
            plays: 'Ji-yeong',
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2021/09/Squid-Game-Ji-Yeong-a3b1b10.jpg?webp=true&quality=90&resize=620%2C413',
            about: 'Who is Ji-yeong? Another cash-strapped player – number 240 to be exact – Ji-yeong forms an unlikely bond with Sae-byeok. It is revealed she was in prison for killing her abusive father.'
        },
    ];

    return (
        <Layout>
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                animate={{ opacity: 1 }}
                className="flex mt-10 ml-32 "
                style={{ minHeight: 700 }}
            >
                <div
                    className='py-10 px-20'
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '90%' }}
                >
                    {actorsArr.map((actor, i) => (
                        <div
                            key={actor.id}
                            className="grid grid-cols-3 gap-4 place-content-center text-white"
                        >
                            <div className=" block w-80 h-80">
                                <img alt='' src={actor.image} />
                            </div>

                            <div className=" ml-5 ">
                                {`${i + 1}. ${actor.name} plays ${actor.plays}.`}
                            </div>

                            <div>
                                {actor.about}
                            </div>

                        </div>
                    ))}
                </div>
            </motion.div>
        </Layout>

    );
};