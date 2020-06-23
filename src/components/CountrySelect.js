import 'isomorphic-fetch';
import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
// import Misc from "../Api/Misc";
import {useCookies} from "react-cookie";
import {Auth as AuthConstants} from "../Constants";
import SearchDropdown from "./SearchDropdown";

const CountrySelect = props => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const cookies = useCookies([AuthConstants.JWT_TOKEN])[0];
  const token = cookies[AuthConstants.JWT_TOKEN];

  useEffect(() => {
    if (!loading) {
      return undefined;
    }

    // Misc.listCountries(token).then(res => {
    //   setOptions(res.data.data);
    // }, err => {
    //   console.error("CountrySelect: Failed to Fetch countries.");
    // }).finally(() => {
    //   setLoading(false);
    // });
  }, []);

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

                    }}
                    onSearch={input => {

                    }}/>
  );
};

CountrySelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.object,
  placeholder: PropTypes.string
};

CountrySelect.defaultProps = {
  value: null,
  placeholder: 'Country'
};

export default CountrySelect;
