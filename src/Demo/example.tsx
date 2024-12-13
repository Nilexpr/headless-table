export const MultiLeverTable = () => {
  return (
    <table summary="Column one has the location and size of accommodation, other columns show the type and number of properties available">
      <caption>Availability of holiday accommodation</caption>
      <thead>
        <tr>
          <td></td>
          <th id="stud" scope="col">
            Studio
          </th>
          <th id="apt" scope="col">
            <abbr title="Apartment">Apt</abbr>
          </th>
          <th id="chal" scope="col">
            Chalet
          </th>
          <th id="villa" scope="col">
            Villa
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th headers="par" id="pbed1">
            1 bedroom
          </th>
          <td headers="par pbed1 stud">11</td>
          <td headers="par pbed1 apt">20</td>
          <td headers="par pbed1 chal">25</td>
          <td headers="par pbed1 villa">23</td>
        </tr>
        <tr>
          <th headers="par" id="pbed2">
            2 bedroom
          </th>
          <td headers="par pbed2 stud">-</td>
          <td headers="par pbed2 apt">43</td>
          <td headers="par pbed2 chal">52</td>
          <td headers="par pbed2 villa">32</td>
        </tr>
        <tr>
          <th headers="par" id="pbed3">
            3 bedroom
          </th>
          <td headers="par pbed3 stud">-</td>
          <td headers="par pbed3 apt">13</td>
          <td headers="par pbed3 chal">15</td>
          <td headers="par pbed3 villa">40</td>
        </tr>
      </tbody>
    </table>
  );
};
