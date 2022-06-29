import React, { useState } from "react";
import data from "./data";
const Search = () => {
  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item["title"]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12 mb-3">
          <div className="mb-3 col-4 mx-auto text-center">
            <h2 className="h4 mb-2 text-secondary fs-5">Search</h2>
            <input
              type="text"
              className="form-control col-12"
              value={filter}
              onChange={searchText.bind(this)}
            />
          </div>
        </div>
        {dataSearch.map((item, index) => {
          return (
            <div className="col-11 col-md-6 col-lg-4 mx-0 mb-5">
              <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={item.img} alt="" className="card-img-top" />
                <div className="card-body">
                  <div className="card-title fs-5 text-danger">
                    {item.title}
                  </div>
                  <div className="card-text text-secondary">{item.desc}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Search;
