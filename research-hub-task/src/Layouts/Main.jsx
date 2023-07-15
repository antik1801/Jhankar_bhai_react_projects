import React from 'react';
import ContainerCards from '../components/ContainerCards';
import ContainerTitle from '../components/ContainerTitle';

const Main = () => {
    const cardContent = [
        {
            img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12622/production/_130389257_2ef21052cf7df6e4aecba84f7571551ab32db5cf0_0_4955_33031000x667.jpg.webp",
            title: "Red alerts have been issued for 15 cities across Italy as extreme heat continues to affect southern Europe.",
            description: "The European Space Agency (ESA) says Italy, Spain, France, Germany and Poland may see extreme conditions.The ESA monitors land and sea temperatures via its satellites.The hottest temperature ever recorded in Europe was 48.8C in Sicily in August 2021, and forecasts suggest similar levels could be reached this week.",
        },
        {
            img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/0BAC/production/_130388920_nolan.jpg.webp",
            title: "A 19-year-old firefighter has been killed in western Canada as the country battles its worst season of wildfires on record.",
            description: "About 900 wildfires are currently burning across Canada, some 560 of which remain out of control.Officials said a female firefighter had been found caught under a tree after becoming separated from the rest of her team while clearing an area of brush.She was airlifted to hospital but died on Thursday.",
        },
        {
            img: "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/17690/production/_130388859_gettyimages-1532794211.jpg",
            title: "Ravichandran Ashwin took seven wickets as India bowled West Indies out for 130 to win the first Test by an innings and 141 runs inside three days in Roseau, Dominica.",
            description: "This experience has been a special moment,said Jaiswal.The win was India's largest margin of victory in a Test match in the Caribbean and maintains their 21-year unbeaten run in Tests against the West Indies.Jaiswal's hundred was backed up by Rohit Sharma's 103 and Virat Kohli's 76 in India's innings, before West Indies' batting crumbled for a second time in the match.",
        },
        {
            img: "https://ychef.files.bbci.co.uk/1600x900/p0g0hgr0.webp",
            title: "Rising prices and interest rates are pushing some workers to move around the labour market, rather than dig in their heels at their current employers.",
            description: "he ongoing cost-of-living crisis means workers are feeling the pinch – as prices rise, salaries aren’t going as far as they once did. Typically, in times of financial stress, employees stay in their current roles, collect a stable income and ride out the economic storm.But amid soaring inflation more employees are leaving their jobs – or are strongly considering doing so.",
        },
        {
            img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1361B/production/_130378397_629bdf5523f4b2a0053fbf77877937538b604bf0.jpg.webp",
            title: "The US says it will not 'under any circumstances' pay reparations to developing countries hit by climate change-fuelled disasters.",
            description: "Climate envoy John Kerry made the remarks at a Congress hearing before flying to China to discuss the issue.Some countries want major economies - which produce the most greenhouse gases - to pay for past emissions.A fund has been established for poorer nations, but it remains unclear how much richer countries will pay.Mr Kerry, a former secretary of state, was asked during a hearing before a House of Representatives foreign affairs committee whether the US would pay countries that have been damaged by floods, storms and other climate-driven disasters.",
        },
        {
            img: "",
            title: "",
            description: "",
        },
    ]
    return (
        <div className='container'>
            <ContainerTitle title={"Card Manager"}></ContainerTitle>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5">
                {
                    cardContent.map((cardItem,index)=><ContainerCards key={index} cardItem={cardItem}></ContainerCards>)
                }
            </div>
        </div>
    );
};

export default Main;