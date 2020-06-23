import React, {useEffect, useState} from 'react';
import SearchDropdown from "../SearchDropdown";
// import {Profession} from "../../Api";
import {useCookies} from "react-cookie";
import {Auth as AuthConstants} from "../../Constants";
import PropTypes from 'prop-types';

const ProfessionDropdown = props => {
  const cookies = useCookies([AuthConstants.JWT_TOKEN])[0];

  const SIZE = 50;

  const requestConfig = {
    headers: {
      Authorization: "Bearer " + cookies[AuthConstants.JWT_TOKEN]
    }
  };

  const [professions, setProfessions] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const list = ({clear = false, page = 0, size = SIZE} = {}) => {
    // Profession.list(requestConfig, {
    //   beg: page,
    //   size: size,
    //   query: query
    // }).then(res => {
    //   setProfessions([...(clear ? [] : professions), ...res.data.data])
    // }, err => {
    //   console.log("Professions Dropdown:", err);
    // }).finally(() => {
    //   setLoading(false)
    // });
  };

  useEffect(() => {
    list({clear: true});
  }, []);

  useEffect(() => {
    list({clear: true});
  }, [query]);

  useEffect(() => {
    list({
      page: page
    });
  }, [page]);

  return (
    <SearchDropdown value={props.value} onChange={(item) => {
      props.onChange(item);
    }}
                    labelAttribute='name'
                    matchAttribute='id'
                    width='100%'
                    data={professions}
                    loading={loading}
                    inputPlaceholder='Profession'
                    requestMoreData={() => {
                      setPage(page + 1);
                    }}
                    onSearch={input => {
                      if (input !== query) {
                        setPage(0);
                        setQuery(input);
                      }
                    }}/>
  )
};

ProfessionDropdown.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export default ProfessionDropdown
