import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
const Search = () => {
  const [filters, setFilters] = useState({
    karma: 0,
  });

  const [jobSeekers, setJobSeekers] = useState([
    {
      id: "1224",
      descriptor: {
        name: "Mayank Bansal",
        short_desc:
          "Product Manager || Enabling Reconciliation & Settlement framework on ONDC || Financial Services || Retail ",
        long_desc:
          "Entrepreneurial journey from failed startup to thriving tech ventures. Expertise in software development, blockchain, and B2B solutions. Currently contributing to FIDE at Enterprise Minds.",
        media: [
          {
            mimetype: "application/pdf",
            url: "https://www.resume-link.com",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/1",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/2",
          },
        ],
        images: [
          {
            url: "https://media.licdn.com/dms/image/C4E03AQEQLnpcjmWwGQ/profile-displayphoto-shrink_400_400/0/1638454324563?e=1705536000&v=beta&t=NBLbRWXya0YrMWsfWY8PCbfFW7msDBpiYzxpcbh9fA4",
          },
        ],
      },
    },
    {
      id: "1224",
      descriptor: {
        name: "Mayank Bansal 2",
        short_desc:
          "Product Manager || Enabling Reconciliation & Settlement framework on ONDC || Financial Services || Retail ",
        long_desc:
          "Entrepreneurial journey from failed startup to thriving tech ventures. Expertise in software development, blockchain, and B2B solutions. Currently contributing to FIDE at Enterprise Minds.",
        media: [
          {
            mimetype: "application/pdf",
            url: "https://www.resume-link.com",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/1",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/2",
          },
        ],
        images: [
          {
            url: "https://media.licdn.com/dms/image/C4E03AQEQLnpcjmWwGQ/profile-displayphoto-shrink_400_400/0/1638454324563?e=1705536000&v=beta&t=NBLbRWXya0YrMWsfWY8PCbfFW7msDBpiYzxpcbh9fA4",
          },
        ],
      },
    },
    {
      id: "1224",
      descriptor: {
        name: "Mayank Bansal 3",
        short_desc:
          "Product Manager || Enabling Reconciliation & Settlement framework on ONDC || Financial Services || Retail ",
        long_desc:
          "Entrepreneurial journey from failed startup to thriving tech ventures. Expertise in software development, blockchain, and B2B solutions. Currently contributing to FIDE at Enterprise Minds.",
        media: [
          {
            mimetype: "application/pdf",
            url: "https://www.resume-link.com",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/1",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/2",
          },
        ],
        images: [
          {
            url: "https://media.licdn.com/dms/image/C4E03AQEQLnpcjmWwGQ/profile-displayphoto-shrink_400_400/0/1638454324563?e=1705536000&v=beta&t=NBLbRWXya0YrMWsfWY8PCbfFW7msDBpiYzxpcbh9fA4",
          },
        ],
      },
    },
    {
      id: "1224",
      descriptor: {
        name: "Mayank Bansal 4",
        short_desc:
          "Product Manager || Enabling Reconciliation & Settlement framework on ONDC || Financial Services || Retail ",
        long_desc:
          "Entrepreneurial journey from failed startup to thriving tech ventures. Expertise in software development, blockchain, and B2B solutions. Currently contributing to FIDE at Enterprise Minds.",
        media: [
          {
            mimetype: "application/pdf",
            url: "https://www.resume-link.com",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/1",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/2",
          },
        ],
        images: [
          {
            url: "https://media.licdn.com/dms/image/C4E03AQEQLnpcjmWwGQ/profile-displayphoto-shrink_400_400/0/1638454324563?e=1705536000&v=beta&t=NBLbRWXya0YrMWsfWY8PCbfFW7msDBpiYzxpcbh9fA4",
          },
        ],
      },
    },
  ]);
  let tempData = [
    {
      id: "1224",
      descriptor: {
        name: "Mayank Bansal",
        short_desc:
          "Product Manager || Enabling Reconciliation & Settlement framework on ONDC || Financial Services || Retail ",
        long_desc:
          "Entrepreneurial journey from failed startup to thriving tech ventures. Expertise in software development, blockchain, and B2B solutions. Currently contributing to FIDE at Enterprise Minds.",
        media: [
          {
            mimetype: "application/pdf",
            url: "https://www.resume-link.com",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/1",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/2",
          },
        ],
        images: [
          {
            url: "https://media.licdn.com/dms/image/C4E03AQEQLnpcjmWwGQ/profile-displayphoto-shrink_400_400/0/1638454324563?e=1705536000&v=beta&t=NBLbRWXya0YrMWsfWY8PCbfFW7msDBpiYzxpcbh9fA4",
          },
        ],
      },
    },
    {
      id: "1224",
      descriptor: {
        name: "Mayank Bansal 2",
        short_desc:
          "Product Manager || Enabling Reconciliation & Settlement framework on ONDC || Financial Services || Retail ",
        long_desc:
          "Entrepreneurial journey from failed startup to thriving tech ventures. Expertise in software development, blockchain, and B2B solutions. Currently contributing to FIDE at Enterprise Minds.",
        media: [
          {
            mimetype: "application/pdf",
            url: "https://www.resume-link.com",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/1",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/2",
          },
        ],
        images: [
          {
            url: "https://media.licdn.com/dms/image/C4E03AQEQLnpcjmWwGQ/profile-displayphoto-shrink_400_400/0/1638454324563?e=1705536000&v=beta&t=NBLbRWXya0YrMWsfWY8PCbfFW7msDBpiYzxpcbh9fA4",
          },
        ],
      },
    },
    {
      id: "1224",
      descriptor: {
        name: "Mayank Bansal 3",
        short_desc:
          "Product Manager || Enabling Reconciliation & Settlement framework on ONDC || Financial Services || Retail ",
        long_desc:
          "Entrepreneurial journey from failed startup to thriving tech ventures. Expertise in software development, blockchain, and B2B solutions. Currently contributing to FIDE at Enterprise Minds.",
        media: [
          {
            mimetype: "application/pdf",
            url: "https://www.resume-link.com",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/1",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/2",
          },
        ],
        images: [
          {
            url: "https://media.licdn.com/dms/image/C4E03AQEQLnpcjmWwGQ/profile-displayphoto-shrink_400_400/0/1638454324563?e=1705536000&v=beta&t=NBLbRWXya0YrMWsfWY8PCbfFW7msDBpiYzxpcbh9fA4",
          },
        ],
      },
    },
    {
      id: "1224",
      descriptor: {
        name: "Mayank Bansal 4",
        short_desc:
          "Product Manager || Enabling Reconciliation & Settlement framework on ONDC || Financial Services || Retail ",
        long_desc:
          "Entrepreneurial journey from failed startup to thriving tech ventures. Expertise in software development, blockchain, and B2B solutions. Currently contributing to FIDE at Enterprise Minds.",
        media: [
          {
            mimetype: "application/pdf",
            url: "https://www.resume-link.com",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/1",
          },
          {
            mimetype: "application/pdf",
            url: "https://www.certificate-link.com/2",
          },
        ],
        images: [
          {
            url: "https://media.licdn.com/dms/image/C4E03AQEQLnpcjmWwGQ/profile-displayphoto-shrink_400_400/0/1638454324563?e=1705536000&v=beta&t=NBLbRWXya0YrMWsfWY8PCbfFW7msDBpiYzxpcbh9fA4",
          },
        ],
      },
    },
  ];
  // useEffect(() => {
  //   setJobSeekers(
  //     tempData.filter((value) => {
  //       return value.karma >= filters.karma;
  //     })
  //   );
  // }, [filters]);

  const [search, setSearch] = useState("");

  function handleSubmit() {
    let value = fetch(`Whatever the url is`, {
      method: "POST",
      body: JSON.stringify({
        search: search,
      }),
    });
    value = value.responses[0].message.catalog.providers[0].items;
    setJobSeekers(value);
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="w-1/2 relative">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="focus:outline-none p-5 mono text-xl w-full my-6 h-[75px] border rounded-full"
          placeholder="Search Skillsets..."
        />
        <div
          onClick={() => {}}
          className="cursor-pointer absolute top-9 right-10 rounded-full flex justify-between p-5 items-center bg-[#EDEDED] w-[150px] h-[50px]"
        >
          Search
          <img
            src="/landing/search.png"
            alt="Search Here"
            className="w-6 h-6"
          />
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-[80%]  flex flex-wrap justify-center">
          {jobSeekers.map((value, index) => (
            <div
              key={index}
              style={{
                boxShadow: "0px 3.36px 108.00001px 0px rgba(0, 0, 0, 0.15)",
              }}
              className="w-[40%] h-[300px] bg-white rounded-xl m-5 flex"
            >
              <div className="w-1/2 h-full flex flex-col gap-5 justify-center items-center">
                <img
                  src={value.descriptor.images[0].url}
                  alt={`A picture of ${value.descriptor.name}`}
                  className="rounded-full w-28 h-28"
                />
                <h1 className="text-lg mono">Karma: 3000K🔥</h1>
                <h1 className="text-lg mono">Links: 200</h1>
              </div>
              <div className="w-1/2 h-full flex flex-col justify-around items-center">
                <div>
                  <h1 className="text-xl font-bold mono">
                    {value.descriptor.name}
                  </h1>
                  <h1 className="text-lg fmono">
                    {value.descriptor.short_desc.split("||")[0]}
                  </h1>
                  <p className="text-sm">{value.descriptor.long_desc}</p>
                </div>
                <button className="mx-auto mr-5 bg-black text-white hover:bg-white border-2 hover:border-black  hover:text-black transition-all ease-in-out duration-500 w-[125px] h-[50px] rounded-full">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className="w-[18%] rounded-xl m-5 min-h-[600px] "
          style={{
            boxShadow: "0px 3.36px 108.00001px 0px rgba(0, 0, 0, 0.15)",
          }}
        >
          <h1 className="mono p-5 text-4xl font-bold border-b-2 border-black w-full text-center ">
            Filters
          </h1>
          <div className="flex justify-between items-center text-xl font-bold mono px-10 py-5">
            <h1>A-Z</h1>
            <h1>Ascending ↓</h1>
          </div>
          <div className="w-full flex justify-center gap-5">
            <input
              type="range"
              onChange={(e) =>
                setFilters({ ...filters, karma: e.target.value })
              }
              min="0"
              max="10000"
              className="w-[70%] accent-red-600 "
            />
            <p className="mono font-bold">{filters.karma}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
