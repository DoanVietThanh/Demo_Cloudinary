const express = require('express');
const app = express();
const { cloudinary } = require('./utils/cloudinary');
const PORT = process.env.PORT || 3001;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.get('/api/images', async (req, res) => {
  const { resources } = await cloudinary.search
    .expression('folder:dev_setups')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();
  const publicIds = resources.map((file) => file.public_id);
  res.json(publicIds);
});

app.post('/api/upload', async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      folder: 'dev_setups',
    });
    console.log('uploadedResponse: ', uploadedResponse);
    res.json({ msg: 'Yeahhhhhhhhhhh' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log('listening on port at ', PORT);
});

// express.json -> convert JSON data (từ HTTP request) sang đối tượng Javascript
// express.urlencode() -> xử lí data gửi dưới dạng URL_endcoded (POST)
// extended: true -> cho phép gửi đối tượng phức tạp như array, object
