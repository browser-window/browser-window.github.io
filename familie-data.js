// Engelman familie: verjaardagen (b), trouwdagen (w) en in memoriam (d).
// rk: 'p' = partner van, 'f' = familie van; r = naam van die persoon.
const B = (m, d, y, n, rk, r) => ({ t: 'b', m, d, y, n, rk, r });
// fx/end: huwelijk dat eindigde (vast aantal jaren, einddatum)
const W = (m, d, y, a, b, fx, end) => ({ t: 'w', m, d, y, n: a + ' & ' + b, fx, end });
const D = (m, d, y, n, died, age, rk, r) => ({ t: 'd', m, d, y, n, died, age, rk, r });

export default [
  W(1, 1, 2001, 'Ria', 'Wim', 22, 2023), W(1, 2, 1976, 'Leontine', 'Koos', 39, 2015),
  B(1, 14, 1965, 'Monique', 'f', 'Anke'), B(1, 15, 2010, 'Imke', 'f', 'Petra'), B(1, 15, 1984, 'Heleen', 'p', 'Tom'),
  W(1, 18, 2013, 'Rob', 'Merle'), B(1, 21, 1969, 'Danny', 'p', 'Cécile'), D(1, 21, 1946, 'Jacques', 2012, 66, 'p', 'José'),
  B(1, 28, 1979, 'Henk', 'p', 'Petra'),
  B(2, 3, 1979, 'Maarten', 'p', 'Ineke'), B(2, 3, 2012, 'Fieve', 'f', 'Petra'), B(2, 6, 1964, 'Freek', 'f', 'Fons'),
  B(2, 12, 1977, 'Rob', 'p', 'Merle'), B(2, 14, 1945, 'Diny', 'p', 'Kees'), B(2, 18, 2015, 'Gijs', 'f', 'Lonneke'),
  W(2, 19, 1999, 'Nick', 'Roos'), W(2, 20, 2009, 'Petra', 'Henk'), B(2, 21, 1974, 'Miranda', 'p', 'Maarten'),
  B(3, 6, 1996, 'Lucas', 'p', 'Megan'), D(3, 6, 1946, 'Bernard', 2023, 77, 'p', 'Truus'), D(3, 8, 1937, 'Wim', 2026, 89, 'p', 'Ria'),
  B(3, 12, 2000, 'Megan', 'p', 'Lucas'), B(3, 15, 1946, 'Greet', 'p', 'Bas'), D(3, 19, 1978, 'Reny', 1984, 6, 'f', 'Leontine'),
  B(3, 20, 2016, 'Maud', 'f', 'Tom'), B(3, 28, 1979, 'Ineke', 'p', 'Maarten'),
  B(4, 3, 1979, 'Merle', 'p', 'Rob'), B(4, 7, 2017, 'Yara', 'f', 'Ineke'), B(4, 12, 2009, 'Meike', 'f', 'Lonneke'),
  B(4, 24, 2011, 'Merlin', 'f', 'Evelyne'), B(4, 25, 1965, 'Nick', 'p', 'Roos'), W(4, 26, 1963, 'Anke', 'Jean'),
  B(4, 27, 1952, 'Carla', 'p', 'André'),
  B(5, 2, 1983, 'Anne', 'p', 'Luc'), B(5, 2, 2006, 'Kiki', 'f', 'Marcel'), B(5, 5, 2004, 'Finn', 'f', 'Marcel'),
  W(5, 13, 2001, 'Marcel', 'Natascha'), B(5, 15, 2011, 'Kalle', 'f', 'Lonneke'), W(5, 16, 1970, 'Fons', 'Anneke'),
  D(5, 19, 1941, 'Jean', 2012, 70, 'p', 'Anke'), W(5, 19, 1976, 'José', 'Jacques', 36, 2012), W(5, 21, 2005, 'Ineke', 'Maarten'),
  B(5, 28, 1980, 'Petra', 'p', 'Henk'),
  B(6, 4, 2012, 'Tim', 'f', 'Ineke'), B(6, 10, 1968, 'Ruud', 'p', 'Ria'), W(6, 19, 2015, 'Tom', 'Heleen'),
  W(6, 20, 2006, 'Danny', 'Cécile'), D(6, 21, 1938, 'Fons', 2020, 81, 'p', 'Anneke'), B(6, 26, 1973, 'Natascha', 'p', 'Marcel'),
  B(6, 26, 1975, 'Maarten', 'p', 'Miranda'), B(6, 28, 1946, 'Bas', 'p', 'Greet'),
  B(7, 7, 1978, 'Annemiek', 'p', 'Richard'), B(7, 14, 1947, 'Truus', 'p', 'Bernard'), B(7, 17, 1962, 'Richard', 'p', 'Annemiek'),
  B(7, 21, 1975, 'Cin', 'f', 'Hennie'), D(7, 24, 1916, 'Mama', 2005, 88, 'p', 'van Kuyk'),
  D(8, 7, 1908, 'Papa', 1967, 58, 'p', 'Mama'), W(8, 12, 1937, 'Papa', 'Mama', 29, 1967), B(8, 14, 1984, 'Evelyne', 'f', 'Truus'),
  D(8, 16, 1939, 'Ria', 2023, 84, 'p', 'Wim'), W(8, 17, 1967, 'Kees', 'Diny'), B(8, 19, 2013, 'Brent', 'f', 'Rob'),
  D(8, 28, 1947, 'Koos', 2016, 68, 'f', 'Leontine'), D(8, 30, 1943, 'Hennie', 2020, 76, 'f', 'Engelman'),
  B(9, 2, 2002, 'Rosanne', 'f', 'Nick'), B(9, 3, 1967, 'Luc', 'p', 'Anne'), B(9, 12, 2006, 'Lone', 'f', 'Maarten'),
  D(9, 20, 1940, 'Anke', 2008, 67, 'p', 'Jean'), B(9, 21, 1996, 'Adinda', 'p', 'Luc'), B(9, 22, 2021, 'Huub', 'f', 'Luc'),
  B(9, 22, 2019, 'Lorèn', 'f', 'Rob'), B(9, 25, 1953, 'Bronwyn', 'p', 'Tony'),
  B(10, 9, 1935, 'Anneke', 'p', 'Fons'), D(10, 12, 1966, 'Marja', 2016, 49, 'f', 'Ria'), B(10, 14, 1983, 'Tom', 'p', 'Heleen'),
  B(10, 20, 1961, 'Roos', 'p', 'Nick'), B(10, 28, 1954, 'José', 'p', 'Jacques'), B(10, 29, 1977, 'Frank', 'f', 'Lonneke'),
  B(10, 30, 2015, 'Siem', 'f', 'Petra'),
  D(11, 5, 1950, 'Leontine', 2015, 64, 'p', 'Koos'), B(11, 12, 1970, 'Marcel', 'p', 'Natascha'), B(11, 12, 1986, 'Aurelie', 'f', 'Truus'),
  D(11, 27, 1969, 'Martine', 2018, 48, 'f', 'Fons'),
  B(12, 5, 2013, 'Willow', 'f', 'Evelyne'), B(12, 11, 1944, 'Kees', 'p', 'Diny'), D(12, 15, 1941, 'Wim', 1955, 13, 'f', 'Engelman'),
  W(12, 20, 2019, 'Luc', 'Anne'), B(12, 20, 1962, 'Cécile', 'p', 'Danny'), B(12, 21, 2015, 'Morris', 'f', 'Rob'),
  B(12, 23, 1948, 'Tony', 'p', 'Bronwyn'), B(12, 27, 1966, 'Raymond', 'f', 'Anke'), B(12, 27, 1977, 'Lonneke', 'f', 'Jose'),
  D(12, 29, 1938, 'André', 1999, 60, 'p', 'Carla'),
];
