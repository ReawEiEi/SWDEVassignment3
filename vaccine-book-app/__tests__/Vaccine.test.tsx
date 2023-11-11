import HospitalCatalog from "@/components/HospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const mockResult = {
  success: true,
  count: 3,
  pagination: {},
  data: [
    {
      _id: "652c11e7922bc0de9ac915da",
      name: "Chulalongkorn Hospital",
      address: "1873 Rama IV Rd",
      district: "Pathum Wan",
      province: "Bangkok",
      postalcode: "10330",
      tel: "026494000",
      picture:
        "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
      __v: 0,
      id: "652c11e7922bc0de9ac915da",
    },
    {
      _id: "652c1242922bc0de9ac915dd",
      name: "Rajavithi Hospital",
      address: "2 Phaya Thai Rd, Thung Phaya Thai",
      district: "Ratchathewi",
      province: "Bangkok",
      postalcode: "10400",
      tel: "022062900",
      picture:
        "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
      __v: 0,
      id: "652c1242922bc0de9ac915dd",
    },
    {
      _id: "652c1287922bc0de9ac915e0",
      name: "Thammasat University Hospital",
      address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
      district: "Khlong Luang",
      province: "Pathum Thani",
      postalcode: "12120",
      tel: "029269999",
      picture:
        "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
      __v: 0,
      id: "652c1287922bc0de9ac915e0",
    },
  ],
};

describe("HospitalCatalog", () => {
  it("should have correct number of hospital images", async () => {
    const hospitalCatalog = await HospitalCatalog({ hospitalJson: mockResult });
    render(hospitalCatalog);
    await waitFor(() => {
      const hospitalImages = screen.queryAllByRole("img");
      expect(hospitalImages).toHaveLength(3);
    });
  });
});
