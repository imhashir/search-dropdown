import React, {useEffect, useState} from 'react';
import SearchDropdown from "../SearchDropdown";
// import {Degree} from "../../Api";
import {useCookies} from "react-cookie";
import {Auth as AuthConstants} from "../../Constants";
import PropTypes from 'prop-types';

const DegreeDropdown = props => {
  const cookies = useCookies([AuthConstants.JWT_TOKEN])[0];

  const requestConfig = {
    headers: {
      Authorization: "Bearer " + cookies[AuthConstants.JWT_TOKEN]
    }
  };

  const [degrees, setDegrees] = useState([]);
  const [loading, setLoading] = useState(true);

  const list = (clear = false) => {
    // Degree.list(requestConfig).then(res => {
    //   setDegrees([...(clear ? [] : degrees), ...res.data.data])
    // }, err => {
    //   console.log("Degrees Dropdown:", err);
    // }).finally(() => {
    //   setLoading(false)
    // });
  };

  useEffect(() => {
    list(true);
  }, []);

  return (
    <SearchDropdown value={props.value} onChange={(item) => {
      props.onChange(item);
    }}
                    labelAttribute='title'
                    matchAttribute='id'
                    width='100%'
                    data={degrees}
                    loading={loading}
                    inputPlaceholder='Degree*'/>
  )
};

DegreeDropdown.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export default DegreeDropdown
