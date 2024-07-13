import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import { Row } from 'antd';
import { AiFillCode } from 'react-icons/ai';

const LeetCodeContributions = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        console.log('oaodhfpadfja')
        const username = 'Nagulraj'; // Replace with your LeetCode username
        const response = await axios.get(`https://leetcode.com/${username}/`);
        console.log(response)

        const $ = cheerio.load(response.data);
        const contributionData = $('.progress-bar-success')
          .toArray()
          .map((bar) => ({
            month: $(bar).parent().find('.progress-bar-title').text().trim(),
            problemsSolved: Number($(bar).attr('style').match(/width: (\d+)%/)[1]),
          }));

        setContributions(contributionData);
        // console.log(contributionData)
      } catch (error) {
        console.error('Error fetching LeetCode contributions:', error);
      }
    };

    fetchContributions();
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">LeetCode</strong> Contributions
      </h1>
      <div className="leetcode-contributions">
        {contributions.map((contribution, index) => (
          <div key={index} className="leetcode-contribution">
            <h3>{contribution.month}</h3>
            <div className="leetcode-icon">
              <AiFillCode />
            </div>
            <p>{contribution.problemsSolved} problems solved</p>
          </div>
        ))}
      </div>
    </Row>
  );
};

export default LeetCodeContributions;