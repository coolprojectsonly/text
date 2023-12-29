import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getspeech = createAsyncThunk(
  "/post/getspeech",
  async ({ text }) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("voice_code", "en-US-1");
    encodedParams.set("text", text);
    encodedParams.set("speed", "1.00");
    encodedParams.set("pitch", "1.00");
    encodedParams.set("output_type", "audio_url");

    const options = {
      method: "POST",
      url: "https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "35360dea7cmshdbe7fec6300c773p10ff91jsnf1424cb37790",
        "X-RapidAPI-Host": "cloudlabs-text-to-speech.p.rapidapi.com",
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
