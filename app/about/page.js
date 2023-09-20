const title = "About Page Title";
const description = "About Page description";
const url = "https://alikidi.com";
const image =
  "https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=1024x1024&w=is&k=20&c=-AdIwLn-nIYlgctc95CZuJHnkku_ia-f8A8m2LFwl2A=";

export function generateMetadata() {
  return {
    title: "About Page",
    description: "About Page description",
    openGraph: {
      title: title,
      description: description,
      url: url,
      image: "",
      siteName: "Alikidi.com",
      images: [
        {
          url: image,
          width: 800,
          height: 600,
        },
        {
          url: image,
          width: 1800,
          height: 1600,
          alt: "Legato Designs",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "alikidi",
      title: title,
      description: description,
      creator: "Dexterous Texhnology",
      images: [image],
    },
    alternates: {
      canonical: "https://alikidi.com",
    },
    manifest: "https://nextjs.org/manifest.json",
  };
}
const Page = () => {
  return (
    <>
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title End */}

      {/* 1rd Block Wrapper Start */}
      <div className="utf_block_wrapper about-block-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="single-post">
                <div className="utf_post_content-area">
                  <div className="entry-content">
                    <p
                      style={{
                        textAlign: "justify",
                        color: "#000",
                        fontSize: "24px",
                        fontWeight: "bold",
                        fontFamily: "Anek Telugu",
                      }}
                    >
                      అలికిడి న్యూస్ ::
                    </p>
                    <p
                      style={{
                        textAlign: "justify",
                        color: "#000",
                        fontFamily: "Noto Serif Telugu",
                      }}
                    >
                      నిజాన్ని నిలిపే,సమాజాన్ని మేలుకొలిపే నిఖార్సైన ఛానెల్
                      సామాన్యుని కన్నీటి గాథలు అన్నదాత ఆవేదనలు, మధ్యతరగతి
                      బ్రతుకు సిత్రాలు, ఉద్యోగ వేటలో నిరుద్యోగుల అగచాట్లు....
                      గల్ఫ్ మోసాలు.. సమాజంలో మహిళలు, చిన్నారులపై అఘాయిత్యాలు,
                      గాడితప్పుతున్న యువత , మార్గదర్శకులైన వ్యక్తుల విజయగాథలు,
                      తప్పిదాల తో గతమే బాగుండేదని నిట్టూర్పు చూపుల ఫెయిల్యూర్స్
                      స్టోరీలు,సంచలన సామాజిక రాజకీయ విశేషాలు, ప్రపంచ వింతలు....
                      ఇలాంటి మరెన్నో విషయాలను నిక్కచ్చిగా నిర్భయంగా ప్రజల చెంతకు
                      తీసుకు వచ్చే ఏకైక వేదిక.....
                    </p>
                    <p
                      style={{
                        textAlign: "justify",
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: "22px",
                        fontFamily: "Noto Serif Telugu",
                      }}
                    >
                      సామాన్యుని గుండె చప్పుడు..... అలికిడి
                    </p>
                    {/* <p>
                      <img
                        className="pull-left"
                        src="images/news/news-details1.jpg"
                        alt
                      />
                    </p> */}
                    {/* <p style={{ textAlign: "justify" }}>
                       సామాన్యుని కన్నీటి గాథ, అన్నదాత ఆవేదన, మధ్యతరగతి బ్రతుకు
                      సిత్రాలు, ఉద్యోగ వేటలో నిరుద్యోగుల అగచాట్లు.... గల్ఫ్
                      మోసాలు.. సమాజంలో మహిళలు, చిన్నారులపై అఘాయిత్యాలు, చెడు
                      దారిలో పయనిస్తున్న యువత , సంచలన రాజకీయ విశేషాలు, ప్రపంచ
                      వింతలు.... ఇలాంటి మరెన్నో విషయాలను నిర్భయంగా ప్రజల చెంతకు
                      తీసుకు వచ్చే ఏకైక వేదిక.....
                    </p> */}
                    {/* <p style={{ textAlign: "justify" }}>
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged.
                    </p> */}
                    {/* <p style={{ textAlign: "justify" }}>
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 1rd Block Wrapper End */}

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="d-flex justify-content-start align-items-center  my-2">
              <img src="assets/images/youtubes.png" height={20} alt="img" />
              <a href="https://www.youtube.com/@alikidinews" target="_blank">
                {" "}
                <h6 className="mx-2" style={{ color: "#e5342c" }}>
                  www.youtube.com/@alikidinews
                </h6>
              </a>
            </div>
            <div className="d-flex justify-content-start align-items-center   my-2">
              <img src="assets/images/facebook.png" height={35} alt="img" />
              <a
                href="https://www.facebook.com/profile.php?id=100092603236788"
                target="_blank"
              >
                <h6 className="mx-2" style={{ color: "#e5342c" }}>
                  www.facebook.com/@alikidinews
                </h6>
              </a>
            </div>
            <div className="d-flex justify-content-start align-items-center  my-2">
              <img src="assets/images/insta.png" height={40} alt="img" />
              <a
                href="https://instagram.com/alikidinews?igshid=ZGUzMzM3NWJiOQ=="
                target="_blank"
              >
                <h6 className="mx-2" style={{ color: "#e5342c" }}>
                  www.instagram.com/@alikidinews
                </h6>
              </a>
            </div>
            <div className="d-flex justify-content-start align-items-center  my-2">
              <img src="assets/images/twitter.png" height={35} alt="img" />
              <a href="https://twitter.com/alikidinews" target="_blank">
                <h6 className="mx-2" style={{ color: "#e5342c" }}>
                  www.twitter.com/@alikidinews
                </h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
