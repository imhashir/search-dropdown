import 'isomorphic-fetch';
import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
// import Misc from "../Api/Misc";
import {useCookies} from "react-cookie";
import {Auth as AuthConstants} from "../Constants";
import SearchDropdown from "./SearchDropdown";

const CitySelect = props => {
  const cookies = useCookies([AuthConstants.JWT_TOKEN])[0];
  const requestConfig = {
    headers: {
      Authorization: "Bearer " + cookies[AuthConstants.JWT_TOKEN]
    }
  };

  const SIZE = 25;

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [last, setLast] = useState(null);

  const list = ({clear = false, last = null} = {}) => {
    if (!props.countryId) {
      setOptions([]);
      return undefined;
    }
    // Misc.listCities(props.countryId, requestConfig, {
    //   last: last,
    //   query: query,
    //   size: SIZE
    // }).then(res => {
    //   if(res.data.data === 0)
    //     return;
    //   setOptions([...(clear ? [] : options), ...res.data.data])
    // }, err => {
    //   console.log("SkillsDropdown:", err);
    // }).finally(() => {
    //   setLoading(false)
    // });
  };

  useEffect(() => {
    list({clear: true, last: null});
  }, [props.countryId, query]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <SearchDropdown value={props.value} onChange={(item) => {
      props.onChange(item);
    }}
                    labelAttribute='name'
                    matchAttribute='id'
                    width='100%'
                    data={options}
                    loading={loading}
                    inputPlaceholder={props.placeholder}
                    requestMoreData={() => {
                      list({
                        last: options[options.length - 1].id
                      })
                    }}
                    onSearch={input => {
                      if (input !== query) {
                        setQuery(input);
                      }
                    }}/>
  );
};

CitySelect.propTypes = {
  countryId: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.object,
  placeholder: PropTypes.string
};

CitySelect.defaultProps = {
  placeholder: 'City'
};

export default CitySelect;
