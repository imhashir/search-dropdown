import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import SearchDropdown from "../SearchDropdown";
// import {Skills} from "../../Api";
import {useCookies} from "react-cookie";
import {Auth as AuthConstants} from "../../Constants";

const SkillsDropdown = props => {
  const cookies = useCookies([AuthConstants.JWT_TOKEN])[0];

  const SIZE = 50;

  const requestConfig = {
    headers: {
      Authorization: "Bearer " + cookies[AuthConstants.JWT_TOKEN]
    }
  };

  const [skills, setSkills] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const listSkills = ({clear = false, page = 0, size = SIZE} = {}) => {
    // Skills.list(props.profession_id, requestConfig, {
    //   beg: page,
    //   size: SIZE,
    //   query: query,
    //   type: props.type
    // }).then(res => {
    //   if(res.data.data.skills.length === 0)
    //     return;
    //   setSkills([...(clear ? [] : skills), ...res.data.data.skills])
    // }, err => {
    //   console.log("SkillsDropdown:", err);
    // }).finally(() => {
    //   setLoading(false)
    // });
  };

  useEffect(() => {
    listSkills({clear: true});
  }, [query]);

  useEffect(() => {
    listSkills({
      page: page
    });
  }, [page]);

  return (
    <SearchDropdown value={props.value} onChange={(item) => {
      props.onChange(item);
    }}
                    labelAttribute='name'
                    matchAttribute='id'
                    data={skills}
                    width={'auto'}
                    loading={loading}
                    inputPlaceholder={props.type === 'h' ? 'Add Technical Competencies' : 'Add Soft Skills'}
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

SkillsDropdown.propTypes = {
  type: PropTypes.oneOf(['h', 's']),
  profession_id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
};

SkillsDropdown.defaultProps = {
  type: 'h',
};

export default SkillsDropdown
