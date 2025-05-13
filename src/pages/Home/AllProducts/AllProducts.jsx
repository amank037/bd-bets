import React from 'react'
import './AllProducts.css'
import { useTranslation } from 'react-i18next'

const AllProducts = () => {
    const { t } = useTranslation();

    const bettingWebsites = [
        {
          img: "https://bdbetsolution.com/admin/images/product/20241128114721-4528.webp",
          alt: "playsta-white-label-betting-website-provider",
          text: t("Bdbetsolution! Build your Playsta White Label Betting Website and deliver a premium user experience tailored for the Bangladeshi market. Let's create success together!")
        },
        {
          img: "https://bdbetsolution.com/admin/images/product/20241128114728-2873.webp",
          alt: "Stake White Label Betting Website Provider in Bangladesh",
          text: t("Ready to launch your betting platform? Partner with Bdbetsolution to build a feature-rich Stake White Label Betting Website in Bangladesh. Seamless, customizable, and built for growth!")
        },
        {
          img: "https://bdbetsolution.com/admin/images/product/20241128114736-9092.webp",
          alt: "Babu88 Betting Website Provider in Bangladesh",
          text: t("Take your betting business to new heights with Bdbetsolution! Create a Babu88 White Label Betting Website that delivers top-tier performance and user satisfaction. Start your journey today!")
        },
        {
          img: "https://bdbetsolution.com/admin/images/product/20241128114743-9380.webp",
          alt: "kky247-white-Label-betting-website-provider",
          text: t("Launch your winning platform with Bdbetsolution! Build a Sky247 White Label Betting Website tailored for the Bangladeshi market. Seamless, customizable, and ready for success. Let's make it happen!")
        },
        {
          img: "https://bdbetsolution.com/admin/images/product/20240925131603-5188.webp",
          alt: "",
          text: t("Bdbetsolution Provides budget-friendly Jeetwin White Label Copy Betting Website in Bangladesh, allowing businesses to focus on brand growth without reducing quality.")
        },
        {
          img: "https://bdbetsolution.com/admin/images/product/20240925131419-5770.webp",
          alt: "",
          text: t("Get your Takabet11 White Label Copy Betting Website in Bangladesh. Bdbetsolution provides cutting-edge, cost-effective solutions designed to help your business succeed")
        },
        {
          img: "https://bdbetsolution.com/admin/images/product/20240925131239-8236.webp",
          alt: "",
          text: t("Looking for a reliable Jita White Label Betting Website Provider in Bangladesh? Bdbetsolution specialize in developing platforms that offer outstanding results.")
        },
        {
          img: "https://bdbetsolution.com/admin/images/product/20240925131047-6269.webp",
          alt: "",
          text: t("Create a Betjili White Label Copy Betting Website in Bangladesh with Bdbetsolution! specializes in customized, ready-to-use platforms that meet your business needs.")
        },
        {
          img: "https://bdbetsolution.com/admin/images/product/20240925130912-2537.webp",
          alt: "",
          text: t("Launch your Betvisa White Label Copy Betting Website in Bangladesh? Bdbetsolution delivers the right mix of price, customization & performance to fulfill your needs.")
        },
        {
          img: "https://bdbetsolution.com/admin/images/product/20240925130704-9274.webp",
          alt: "",
          text: t("Bdbetsolution provides the most affordable Elonbet White Label Copy Betting Website in Bangladesh, designed for your specific business needs. contact now")
        },
        {
          img: "https://bdbetsolution.com/admin/images/product/20240925130451-6346.webp",
          alt: "",
          text: t("Bdbetsolution provides Sportsbet White Label Copy Betting Websites in Bangladesh that are fully customizable, secure & user-friendly with an affordable Rate. Contact Now")
        },
        {
          img: "https://bdbetsolution.com/admin/images/product/20240925130236-7187.webp",
          alt: "",
          text: t("Bdbetsolution provides the Krikya22 White Label Copy Betting Website in Bangladesh. We offer cost-effective & robust solutions to help your betting business succeed.")
        },
        {
          img: "https://bdbetsolution.com/admin/images/product/20240925125824-4718.webp",
          alt: "",
          text: t("Join Bdbetsolution to transform your betting business! We provide Velki White Label Copy Betting Websites in Bangladesh at an affordable rate. Are you ready to scale?")
        },
        {
            img: "https://bdbetsolution.com/admin/images/product/20240925125347-3312.webp",
            alt: "",
            text: t("Bdbetsolution delivers high-quality Bj Baji White Label Copy Betting Websites in Bangladesh at Low costs. A rise your betting platform in that nation immediately!")
        },
        {
            img: "https://bdbetsolution.com/admin/images/product/20240924160630-3501.webp",
            alt: "",
            text: t("Our Mostplay solution is designed to deliver a full-featured betting platform that includes real-time odds, various betting markets, and a user-friendly interface, all optimized for both")
        }
      ]

  return (
    <div className='allproducts-div'>
        <div className='products-top-div'>
            <div className='product-top-text'>
                <div className='product-top-text-nest'>
                  <h1>{t('White Label Sports Betting Websites')}</h1>
                  <p>{t('Contact us to discover how our white label sports betting websites in Bangladesh can elevate your business. Our comprehensive white label solutions, provides you access to new technology, a user-friendly platform, and a wide range of betting options to attract your audience.')}</p>
                </div>
            </div>
        </div>

        <div className='products-bottom-div'>
            <div className='products-bottom-text'>
                <h1>{t('Transform Your Business with White Label Sports Betting Website in Bangladesh')}</h1>
                <p>{t('Explore our range of Top White Label Sports Betting Website Provider in Bangladesh, designed to meet the diverse and evolving needs of this dynamic market. Our featured products offer cutting-edge technology and robust features, enabling you to launch and scale your betting operations effortlessly. With a focus on providing seamless user experiences, our White Label Betting Website in Bangladesh ensures high-quality performance, security, and flexibility. We offer a curated List of Betting Website in Bangladesh that includes top-tier options, ensuring you can pick the best for your target audience. Our White Label Betting Software in Bangladesh empowers you to customize your platform, making it suitable for a wide variety of betting services, from sports to casino games.')}</p>
            </div>
            <div className='product-cards-grid'>
                {
                    bettingWebsites.map((website, index) => (
                        <div key={index} className='product-card'>
                            <img src={website.img} alt={website.alt} />
                            <div className="card-button">
                                <button>{t('Play Now')}</button>
                                <button>{t('Read More')}</button>
                            </div>
                            <p>{website.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default AllProducts