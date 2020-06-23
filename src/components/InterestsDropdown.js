import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import SearchDropdown from "../SearchDropdown";
// import {Interests} from "../../Api";
import {useCookies} from "react-cookie";
import {Auth as AuthConstants} from "../../Constants";

const InterestsDropdown = props => {
  const cookies = useCookies([AuthConstants.JWT_TOKEN])[0];

  const SIZE = 50;

  const requestConfig = {
    headers: {
      Authorization: "Bearer " + cookies[AuthConstants.JWT_TOKEN]
    }
  };

  const [value, setValue] = useState(null);
  const [interests, setInterests] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const listSkills = ({clear = false, page = 0, size = SIZE} = {}) => {
    // Interests.list(requestConfig, {
    //   beg: page,
    //   size: SIZE,
    //   query: query
    // }).then(res => {
    //   if(res.data.data.length === 0)
    //     return;
    //   setInterests([...(clear ? [] : interests), ...res.data.data])
    // }, err => {
    //   console.log("SkillsDropdown:", err);
    // }).finally(() => {
    //   setLoading(false)
    // });
  };

  useEffect(() => {
    listSkills({clear: true});
  }, []);

  useEffect(() => {
    listSkills({clear: true});
  }, [query]);

  useEffect(() => {
    listSkills({
      page: page
    });
  }, [page]);

  return (
    <SearchDropdown value={value} onChange={(item) => {
      setValue(item);
      props.onChange(item);
    }}
                    labelAttribute='name'
                    matchAttribute='id'
                    data={interests}
                    width={'auto'}
                    loading={loading}
                    inputPlaceholder={'Add your interests'}
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

InterestsDropdown.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export default InterestsDropdown
