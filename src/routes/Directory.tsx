import React, { useEffect, useState } from "react";
import "bulma/css/bulma.css";
import Fuse from 'fuse.js'

function Directory() {
  const [sisters, setSisters] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const updateSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => setSearch(e.target.value);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  
  async function getSisters() {
    const data = await fetch(`http://localhost:8080/sisters`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const jsonData = await data.json();
    setSisters(jsonData);
  }

  function searchSisters() {
    const options = {
      includeScore: true,
      keys: ['first_name', 'last_name', 'nickname', 'tree']
    }
    
    const fuse = new Fuse(sisters, options)
    
    const results = fuse.search(search)
    const resultArray = results.map(result => result.item)
    console.log(resultArray)
    setSearchResults(resultArray)
  }

  useEffect(() => {
    searchSisters();
  }, [search]);

  useEffect(() => {
    getSisters();
  }, []);

  useEffect(() => {
    setSearchResults(sisters);
  }, [sisters]);



  return (
    <div className="box">
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Search</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Search nicknames"
                onChange={updateSearch}
              />
              <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <table className="table is-bordered is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Nickname</th>
            <th>Sister</th>
            <th>Tree</th>
          </tr>
        </thead>

        <tbody>
          {searchResults.map((sister) => [
            <tr>
              <td>{sister.nickname}</td>
              <td>
                {sister.first_name} {sister.last_name}
              </td>
              <td>{sister.tree}</td>
            </tr>,
          ])}
        </tbody>
      </table>
    </div>
  );
}

export default Directory;
