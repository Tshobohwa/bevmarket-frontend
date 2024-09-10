import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../api/api";
const ESTABLISHEMENT_URL = `${API_URL}/establishements`;

export const getMyEstablishement = createAsyncThunk(
  "myEstablishement/getMyEstablishement",
  async ({ establishement_id }) => {
    try {
      const response = await axios.get(
        `${ESTABLISHEMENT_URL}/${establishement_id}`
      );
      console.log(response);
    } catch (error) {}
  }
);

export const postEstablishement = createAsyncThunk(
  "myEstablishement/postEstablishement",
  async () => {
    try {
      const response = axios.post(ESTABLISHEMENT_URL);
      console.log(response);
    } catch (error) {}
  }
);
