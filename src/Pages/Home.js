import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/amc-hero/thar/banner-241122/banner.png?rev=b15ee63e415c4f09b3eb7d6a08a88939&extension=webp" },
  { url: "https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/amc-hero/xuv400-auction/1920x841-amc-web-size-banner.jpg?rev=0e67a806d179419399cbfebfe52ff196&extension=webp" },
  { url: "https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/all-vehicles/suv/teaser-banner/mahindra-auto_teaser-banner_1920x829px.jpg?rev=b412503815dd4a8596681a3de2d22c2e&extension=webp" },
  { url: "https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/amc-hero/xuv400-launch/xuv400-_-amc.jpg?rev=46dd9e3eb18a4a2ba0cdc247ae3f59d6&extension=webp" },
  { url: "https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/all-vehicles/pick-ups/maxx-pik-up/1920x829_1_eng.png?rev=a5107aadec1a4e6fa548bf9ec2119a16&extension=webp" },
  { url: "https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/amc-hero/5star/banner-desktop.jpg?rev=028aa2eb033e452f9366be7968d54d40&extension=webp" },
  { url: "https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/amc-hero/sustainability-awards/web-size-banner.jpg?rev=a5c9f7337fd84b5ba29d2b3813ffb591&extension=webp" },
];

const Home = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1260}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default Home