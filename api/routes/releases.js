const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/:owner/:repo', (req, res, next) => {
  const url = `https://api.github.com/repos/${req.params.owner}/${req.params.repo}/releases`;
  try {
    axios.get(url)
      .then((response) => {
        res.status(200).send(response.data)
      })
      .catch((error) => res.send(error));
  }
  catch (error) {
    console.error(error);
  }
});

router.post('/', (req, res, next) => {
  const postData = {
    "tag_name": req.body.version,
    "target_commitish": req.body.branch,
    "name": req.body.name,
    "body": req.body.description,
    "draft": req.body.draft,
    "prerelease": req.body.prerelease
  }

  const axiosConfig = {
    headers: {
      'Authorization': `Token ${req.body.token}`,
    }
  };

  const url = `https://api.github.com/repos/${req.body.owner}/${req.body.repository}/releases`;

  try {
    axios.post(url, postData, axiosConfig)
      .then((response) => {
        res.status(200).send(response.data.url)
      })
      .catch((error) => res.send({ error: error }));
  }
  catch (error) {
    console.error(error);
  }
});

module.exports = router;
