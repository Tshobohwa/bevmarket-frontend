import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../api/api";

const CLIENTS_URL = `${API_URL}/clients`;

export const getClients = createAsyncThunk(
  "clients/getClients",
  async ({ establishment_id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${CLIENTS_URL}?establishment_id=${establishment_id}`
      );
      return response.data.data.clients;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getClient = createAsyncThunk(
  "clients/getClient",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${CLIENTS_URL}/${id}`);
      if (response.status !== 200) return rejectWithValue("Couldn't get client");
      return response.data.data.client;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postClient = createAsyncThunk(
  "clients/postClient",
  async ({ client }, { rejectWithValue }) => {
    try {
      const response = await axios.post(CLIENTS_URL, { client });
      if (response.status !== 201) return rejectWithValue("Couldn't create client");
      return response.data.data.client;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateClient = createAsyncThunk(
  "clients/updateClients",
  async ({ clientId, client }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${CLIENTS_URL}/${clientId}`, {
        client,
      });
      if (response.status !== 200) return rejectWithValue("Couldn't update client");
      return response.data.data.client;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
