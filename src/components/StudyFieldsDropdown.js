import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import SearchDropdown from "../SearchDropdown";
// import {Degree} from "../../Api";
import {useCookies} from "react-cookie";
import {Auth as AuthConstants} from "../../Constants";

const StudyFieldsDropdown = props => {
  const cookies = useCookies([AuthConstants.JWT_TOKEN])[0];

  const SIZE = 50;

  const requestConfig = {
    headers: {
      Authorization: "Bearer " + cookies[AuthConstants.JWT_TOKEN]
    }
  };
  const [fields, setFields] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const listFields = ({clear = false, page = 0, size = SIZE} = {}) => {
    // Degree.listFields(requestConfig, {
    //   beg: page,
    //   size: SIZE,
    //   query: query,
    //   type: props.type
    // }).then(res => {
    //   setFields([...(clear ? [] : fields), ...res.data.data])
    // }, err => {
    //   console.log("StudyFieldsDropdown:", err);
    // }).finally(() => {
    //   setLoading(false)
    // });
  };

  useEffect(() => {
    listFields({clear: true});
  }, [query]);

  useEffect(() => {
    listFields({
      page: page
    });
  }, [page]);

  return (
    <SearchDropdown value={props.value} onChange={(item) => {
      props.onChange(item);
    }}
                    labelAttribute='title'
                    matchAttribute='id'
                    data={fields}
                    width={'auto'}
                    loading={loading}
                    inputPlaceholder='Field of Study*'
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

StudyFieldsDropdown.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export default StudyFieldsDropdown
