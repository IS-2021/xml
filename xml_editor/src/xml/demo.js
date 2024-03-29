export default `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<?xml-stylesheet type="text/css" href="styles/style.css"?>
<?xml-stylesheet type="text/css" href="styles/layout.css"?>
<plytoteka
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="schema/plytoteka.xsd"
>
    <autor>
        <student>
            <imie>Jakub</imie>
            <nazwisko>Kazimierczak</nazwisko>
            <indeks>242418</indeks>
        </student>
        <zadanie>
            <temat>💿 Płytoteka</temat>
            <nazwa>Zadanie 3</nazwa>
        </zadanie>
    </autor>

    <gatunki>
        <gatunek id="GAT_01" nazwa="Pop &amp; Rock" />
        <gatunek id="GAT_02" nazwa="Rap &amp; Hip Hop" />
        <gatunek id="GAT_03" nazwa="Reggae &amp; Dub" />
        <gatunek id="GAT_04" nazwa="Jazz/Blues" />
        <gatunek id="GAT_05" nazwa="Ciężkie brzmienia" />
        <gatunek id="GAT_06" nazwa="Muzyka filmowa i teatralna" />
        <gatunek id="GAT_07" nazwa="Nowe brzmienia, klubowa" />
    </gatunki>

    <albumy>
        <album id="AL_01" gatunek="GAT_07" explicit="false">
            <nazwa>Flume (Deluxe Edition)</nazwa>
            <okladka src="./assets/covers/Flume_Deluxe_Edition.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="tak">Flume</wykonawca>
            </wykonawcy>
            <producent>Harley Streten</producent>
            <dystrybutor>Future Classic</dystrybutor>
            <opakowanie>Digipack</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Sintra</nazwa>
                            <dlugosc>2:35</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Holdin On</nazwa>
                            <dlugosc>2:34</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Left Alone</nazwa>
                            <dlugosc>3:29</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
                <plyta cd="2">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Intro</nazwa>
                            <dlugosc>3:54</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Space Cadet</nazwa>
                            <dlugosc>1:57</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Insane</nazwa>
                            <dlugosc>2:07</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2012-11-09</data_premiery>
            <cena waluta="EUR">22.99</cena>
            <ocena>3.9</ocena>
            <naklad>500000</naklad>
            <sprzedaneEgzemplarze>400000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_02" gatunek="GAT_01">
            <nazwa>Random Access Memories</nazwa>
            <okladka src="./assets/covers/Random_Access_Memories.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="tak">Daft Punk</wykonawca>
            </wykonawcy>
            <producent>Sony Music Entertainment</producent>
            <dystrybutor>Sony Music Entertainment</dystrybutor>
            <opakowanie>Jewel Case</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Give Life Back to Music</nazwa>
                            <dlugosc>2:35</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>The Game of Love</nazwa>
                            <dlugosc>3:19</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Giorgio by Moroder</nazwa>
                            <dlugosc>3:30</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2013-05-21</data_premiery>
            <cena waluta="EUR">30.99</cena>
            <ocena>5.0</ocena>
            <naklad>9300000</naklad>
            <sprzedaneEgzemplarze>8100000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_03" gatunek="GAT_01">
            <nazwa>Dire Straits</nazwa>
            <okladka src="./assets/covers/Dire_Straits.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="tak">Dire Straits</wykonawca>
            </wykonawcy>
            <producent>Mercury Records</producent>
            <dystrybutor>Universal Music Polska</dystrybutor>
            <opakowanie>Jewel Case</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Down to the Waterline</nazwa>
                            <dlugosc>3:17</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Water of Love</nazwa>
                            <dlugosc>3:35</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Setting me Up</nazwa>
                            <dlugosc>3:39</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>1996-01-16</data_premiery>
            <cena waluta="EUR">59.9</cena>
            <ocena>3.9</ocena>
            <naklad>8700000</naklad>
            <sprzedaneEgzemplarze>2200000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_04" gatunek="GAT_05">
            <nazwa>Metallica (Remastered)</nazwa>
            <okladka src="./assets/covers/Metallica_Remastered.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="tak">Metallica</wykonawca>
            </wykonawcy>
            <producent>Universal Music Group</producent>
            <dystrybutor>Universal Music Polska</dystrybutor>
            <opakowanie>Digipack</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Enter Sandman</nazwa>
                            <dlugosc>2:42</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Sad But True</nazwa>
                            <dlugosc>2:38</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Holier Than Thou</nazwa>
                            <dlugosc>2:48</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2021-09-10</data_premiery>
            <cena waluta="EUR">57.99</cena>
            <ocena>4.5</ocena>
            <naklad>5100000</naklad>
            <sprzedaneEgzemplarze>1800000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_05" gatunek="GAT_02">
            <nazwa>Milion dróg do śmierci</nazwa>
            <okladka src="./assets/covers/Milion_dróg_do_śmierci.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="nie">Kali</wykonawca>
                <wykonawca czyZagraniczny="nie">Paluch</wykonawca>
            </wykonawcy>
            <producent>Ganja Mafia Label</producent>
            <dystrybutor>CD-Contact Grzegorz Jasiński</dystrybutor>
            <opakowanie>Digipack</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Milion Dróg Do Śmierci</nazwa>
                            <dlugosc>2:38</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Syntetyczna Ganja Mafia</nazwa>
                            <dlugosc>2:43</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Droga Do Raju</nazwa>
                            <dlugosc>2:48</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2016-11-18</data_premiery>
            <cena waluta="PLN">38.07</cena>
            <ocena>4.2</ocena>
            <naklad>2600000</naklad>
            <sprzedaneEgzemplarze>2500000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_06" gatunek="GAT_01">
            <nazwa>Born To Die (The Paradise Edition)</nazwa>
            <okladka src="./assets/covers/Born_To_Die_The_Paradise_Edition.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="tak">Lana Del Rey</wykonawca>
            </wykonawcy>
            <producent>Polydor Records</producent>
            <dystrybutor>Universal Music Polska</dystrybutor>
            <opakowanie>Standard</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Born To Die</nazwa>
                            <dlugosc>3:28</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Off To The Races</nazwa>
                            <dlugosc>2:04</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Blue Jeans</nazwa>
                            <dlugosc>3:52</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2012-11-13</data_premiery>
            <cena waluta="USD">42.54</cena>
            <ocena>4.7</ocena>
            <naklad>5600000</naklad>
            <sprzedaneEgzemplarze>4900000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_07" gatunek="GAT_01">
            <nazwa>Omamy</nazwa>
            <okladka src="./assets/covers/Omamy.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="nie">Wieniawa Julia</wykonawca>
            </wykonawcy>
            <producent>Kayax Productions</producent>
            <dystrybutor>e-Muzyka</dystrybutor>
            <opakowanie>Digibook</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Rozkosz</nazwa>
                            <dlugosc>3:18</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Nie mów</nazwa>
                            <dlugosc>2:32</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Milczysz</nazwa>
                            <dlugosc>2:37</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2022-06-17</data_premiery>
            <cena waluta="PLN">49.99</cena>
            <ocena>2.6</ocena>
            <naklad>9800000</naklad>
            <sprzedaneEgzemplarze>500000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_08" gatunek="GAT_04">
            <nazwa>Bordeaux Concert</nazwa>
            <okladka src="./assets/covers/Bordeaux_Concert.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="tak">Jarrett Keith</wykonawca>
            </wykonawcy>
            <producent>ECM Records</producent>
            <dystrybutor>Universal Music Polska</dystrybutor>
            <opakowanie>Jewel Case</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Part I</nazwa>
                            <dlugosc>3:08</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Part II</nazwa>
                            <dlugosc>3:27</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Part III</nazwa>
                            <dlugosc>2:09</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2022-09-30</data_premiery>
            <cena waluta="EUR">66.99</cena>
            <ocena>4.7</ocena>
            <naklad>3000000</naklad>
            <sprzedaneEgzemplarze>1800000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_09" gatunek="GAT_04">
            <nazwa>Spirit To All</nazwa>
            <okladka src="./assets/covers/Spirit_To_All.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="nie">Wojtek Mazolewski Quintet</wykonawca>
            </wykonawcy>
            <producent>Wojtek Mazolewski</producent>
            <dystrybutor>e-Muzyka</dystrybutor>
            <opakowanie>Digipack</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Spirit to All</nazwa>
                            <dlugosc>3:37</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Grey Day</nazwa>
                            <dlugosc>2:47</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>The Power of the Spirit</nazwa>
                            <dlugosc>3:56</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2022-10-11</data_premiery>
            <cena waluta="PLN">49.99</cena>
            <ocena>3.0</ocena>
            <naklad>100000</naklad>
            <sprzedaneEgzemplarze>100000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_10" gatunek="GAT_03">
            <nazwa>Inaczej</nazwa>
            <okladka src="./assets/covers/Inaczej.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="nie">Bednarek</wykonawca>
            </wykonawcy>
            <producent>Space Records</producent>
            <dystrybutor>e-Muzyka</dystrybutor>
            <opakowanie>Digipack</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>XXMMI...</nazwa>
                            <dlugosc>3:45</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Wyjeuaue</nazwa>
                            <dlugosc>3:11</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Pull Up</nazwa>
                            <dlugosc>2:07</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2021-08-06</data_premiery>
            <cena waluta="PLN">44.99</cena>
            <ocena>3.8</ocena>
            <naklad>1300000</naklad>
            <sprzedaneEgzemplarze>600000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_11" gatunek="GAT_03">
            <nazwa>Oddycham</nazwa>
            <okladka src="./assets/covers/Oddycham.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="nie">Bednarek</wykonawca>
            </wykonawcy>
            <producent>Lou &amp; Rocked Boys</producent>
            <dystrybutor>RockersPro</dystrybutor>
            <opakowanie>Digipack</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Sailing</nazwa>
                            <dlugosc>3:19</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Euforia</nazwa>
                            <dlugosc>3:27</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Up &amp; Here</nazwa>
                            <dlugosc>2:32</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2015-05-29</data_premiery>
            <cena waluta="PLN">33.99</cena>
            <ocena>4.7</ocena>
            <naklad>3000000</naklad>
            <sprzedaneEgzemplarze>700000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_12" gatunek="GAT_03">
            <nazwa>Jestem...</nazwa>
            <okladka src="./assets/covers/Jestem.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="nie">Bednarek</wykonawca>
            </wykonawcy>
            <producent>Lou &amp; Rocked Boys</producent>
            <dystrybutor>RockersPro</dystrybutor>
            <opakowanie>Digipack</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Think About Tomorrow</nazwa>
                            <dlugosc>2:18</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Jestem … (sobą)</nazwa>
                            <dlugosc>3:23</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Światu brakuje troski</nazwa>
                            <dlugosc>2:33</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2012-11-28</data_premiery>
            <cena waluta="PLN">29.99</cena>
            <ocena>3.4</ocena>
            <naklad>4300000</naklad>
            <sprzedaneEgzemplarze>3300000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_13" gatunek="GAT_03">
            <nazwa>Legend: The Best Of Bob Marley &amp; The Wailers</nazwa>
            <okladka src="./assets/covers/Legend_The_Best_Of_Bob_Marley_The_Wailers.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="tak">Bob Marley And The Wailers</wykonawca>
            </wykonawcy>
            <producent>Universal Music Group</producent>
            <dystrybutor>Universal Music Polska</dystrybutor>
            <opakowanie>Standard</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Is This Love</nazwa>
                            <dlugosc>2:15</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>No Woman No Cry (Live)</nazwa>
                            <dlugosc>2:29</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Could You Be Loved</nazwa>
                            <dlugosc>2:55</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2002-06-13</data_premiery>
            <cena waluta="EUR">63.24</cena>
            <ocena>4.9</ocena>
            <naklad>1800000</naklad>
            <sprzedaneEgzemplarze>1500000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_14" gatunek="GAT_03">
            <nazwa>To co najlepsze</nazwa>
            <okladka src="./assets/covers/To_co_najlepsze.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="nie">Daab</wykonawca>
            </wykonawcy>
            <producent>Universal Music Group</producent>
            <dystrybutor>Universal Music Polska</dystrybutor>
            <opakowanie>Jewel Case</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Fala ludzkich serc</nazwa>
                            <dlugosc>3:03</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Kalejdoskop moich dróg</nazwa>
                            <dlugosc>2:43</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Serce jak ogień</nazwa>
                            <dlugosc>3:43</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2018-11-30</data_premiery>
            <cena waluta="PLN">26.99</cena>
            <ocena>4.8</ocena>
            <naklad>6300000</naklad>
            <sprzedaneEgzemplarze>1700000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_15" gatunek="GAT_06">
            <nazwa>Arrival (Original Motion Picture Soundtrack)</nazwa>
            <okladka src="./assets/covers/Arrival_Original_Motion_Picture_Soundtrack.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="tak">Johannsson Johann</wykonawca>
            </wykonawcy>
            <producent>Deutsche Grammophon</producent>
            <dystrybutor>Universal Music Polska</dystrybutor>
            <opakowanie>Digipack</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Arrival</nazwa>
                            <dlugosc>3:20</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Heptapod B</nazwa>
                            <dlugosc>2:01</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Sapir-Whorf</nazwa>
                            <dlugosc>3:23</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2016-12-02</data_premiery>
            <cena waluta="EUR">59.99</cena>
            <ocena>3.2</ocena>
            <naklad>6700000</naklad>
            <sprzedaneEgzemplarze>4400000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_16" gatunek="GAT_06">
            <nazwa>Gru, Dru i Minionki (Despicable Me 3)</nazwa>
            <okladka src="./assets/covers/Gru_Dru_i_Minionki_Despicable_Me_3.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="tak">Various Artists</wykonawca>
            </wykonawcy>
            <producent>Sony Music Entertainment</producent>
            <dystrybutor>Sony Music Entertainment</dystrybutor>
            <opakowanie>Jewel Case</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Yellow Light</nazwa>
                            <dlugosc>3:56</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Hug Me</nazwa>
                            <dlugosc>2:42</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Bad</nazwa>
                            <dlugosc>2:02</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2017-06-23</data_premiery>
            <cena waluta="USD">17.24</cena>
            <ocena>4.4</ocena>
            <naklad>8800000</naklad>
            <sprzedaneEgzemplarze>5200000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_17" gatunek="GAT_06">
            <nazwa>The Witcher: Season 2 (Soundtrack from the Netflix Series)</nazwa>
            <okladka src="./assets/covers/The_Witcher_Season_2_Soundtrack_from_the_Netflix_Series.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="tak">Trapanese Joseph</wykonawca>
            </wykonawcy>
            <producent>Sony Music Entertainment</producent>
            <dystrybutor>Sony Music Entertainment</dystrybutor>
            <opakowanie>Jewel Case</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>The Golden One (from "The Witcher: Season 2" ...</nazwa>
                            <dlugosc>2:34</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Nilfgaard Attacks</nazwa>
                            <dlugosc>2:56</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Nivellen</nazwa>
                            <dlugosc>2:14</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2022-03-11</data_premiery>
            <cena waluta="USD">44.99</cena>
            <ocena>5.0</ocena>
            <naklad>6300000</naklad>
            <sprzedaneEgzemplarze>800000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_18" gatunek="GAT_06">
            <nazwa>Bohemian Rhapsody</nazwa>
            <okladka src="./assets/covers/Bohemian_Rhapsody.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="tak">Queen</wykonawca>
            </wykonawcy>
            <producent>2018</producent>
            <dystrybutor>Queen</dystrybutor>
            <opakowanie>Jewel Case</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>20th Century Fox Fanfare</nazwa>
                            <dlugosc>2:22</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Somebody To Love</nazwa>
                            <dlugosc>2:26</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Doing All Right (Revisited) (with Smile)</nazwa>
                            <dlugosc>3:07</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2018-10-19</data_premiery>
            <cena waluta="EUR">52.99</cena>
            <ocena>5.0</ocena>
            <naklad>8500000</naklad>
            <sprzedaneEgzemplarze>1000000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_19" gatunek="GAT_01">
            <nazwa>Black Pumas (Deluxe Edition)</nazwa>
            <okladka src="./assets/covers/Black_Pumas_Deluxe_Edition.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="tak">Black Pumas</wykonawca>
            </wykonawcy>
            <producent>PIAS Records</producent>
            <dystrybutor>Mystic Production</dystrybutor>
            <opakowanie>Digipack</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Black Moon Rising</nazwa>
                            <dlugosc>3:30</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Colors</nazwa>
                            <dlugosc>3:54</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Know You Better</nazwa>
                            <dlugosc>2:38</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2020-10-23</data_premiery>
            <cena waluta="USD">62.99</cena>
            <ocena>4.9</ocena>
            <naklad>1700000</naklad>
            <sprzedaneEgzemplarze>1400000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_20" gatunek="GAT_07">
            <nazwa>To Believe</nazwa>
            <okladka src="./assets/covers/To_Believe.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="tak">The Cinematic Orchestra</wykonawca>
            </wykonawcy>
            <producent>Nopaper Records</producent>
            <dystrybutor>Universal Music Polska</dystrybutor>
            <opakowanie>Digipack</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>To Believe</nazwa>
                            <dlugosc>2:19</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>A Caged Bird</nazwa>
                            <dlugosc>3:42</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Lessons</nazwa>
                            <dlugosc>3:19</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2019-03-15</data_premiery>
            <cena waluta="EUR">31.99</cena>
            <ocena>3.9</ocena>
            <naklad>5100000</naklad>
            <sprzedaneEgzemplarze>4500000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_21" gatunek="GAT_01">
            <nazwa>S16</nazwa>
            <okladka src="./assets/covers/S16.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="tak">Woodkid</wykonawca>
            </wykonawcy>
            <producent>Universal Music Group</producent>
            <dystrybutor>Universal Music Polska</dystrybutor>
            <opakowanie>Digipack</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>Goliath</nazwa>
                            <dlugosc>3:56</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>In Your Likeness</nazwa>
                            <dlugosc>3:02</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Pale Yellow</nazwa>
                            <dlugosc>3:11</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2020-10-16</data_premiery>
            <cena waluta="EUR">53.99</cena>
            <ocena>1.0</ocena>
            <naklad>3600000</naklad>
            <sprzedaneEgzemplarze>300000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_22" gatunek="GAT_02">
            <nazwa>Teraz pieniądz w cenie / Ty przecież wiesz co</nazwa>
            <okladka src="./assets/covers/Teraz_pieniądz_w_cenie_Ty_przecież_wiesz_co.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="nie">Sokół</wykonawca>
                <wykonawca czyZagraniczny="nie">Pono</wykonawca>
            </wykonawcy>
            <producent>Prosto</producent>
            <dystrybutor>e-Muzyka</dystrybutor>
            <opakowanie>Jewel Case</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>TPWC</nazwa>
                            <dlugosc>2:33</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Nie martw się mną</nazwa>
                            <dlugosc>3:12</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Nie lekceważ nas</nazwa>
                            <dlugosc>3:24</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>2012-12-03</data_premiery>
            <cena waluta="PLN">149.99</cena>
            <ocena>3.6</ocena>
            <naklad>9400000</naklad>
            <sprzedaneEgzemplarze>3900000</sprzedaneEgzemplarze>
        </album>
        <album explicit="false" id="AL_23" gatunek="GAT_01">
            <nazwa>Brothers In Arms</nazwa>
            <okladka src="./assets/covers/Brothers_In_Arms.jpg" />
            <wykonawcy>
                <wykonawca czyZagraniczny="tak">Dire Straits</wykonawca>
            </wykonawcy>
            <producent>Mercury Records</producent>
            <dystrybutor>Universal Music Polska</dystrybutor>
            <opakowanie>Jewel Case</opakowanie>
            <plyty>
                <plyta cd="1">
                    <utwory>
                        <utwor>
                            <numer>01</numer>
                            <nazwa>So Far Away</nazwa>
                            <dlugosc>2:04</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>02</numer>
                            <nazwa>Money for Nothing</nazwa>
                            <dlugosc>3:08</dlugosc>
                        </utwor>
                        <utwor>
                            <numer>03</numer>
                            <nazwa>Walk of Life</nazwa>
                            <dlugosc>3:53</dlugosc>
                        </utwor>
                    </utwory>
                </plyta>
            </plyty>
            <data_premiery>1996-01-16</data_premiery>
            <cena waluta="EUR">19.99</cena>
            <ocena>5.0</ocena>
            <naklad>1400000</naklad>
            <sprzedaneEgzemplarze>1400000</sprzedaneEgzemplarze>
        </album>
    </albumy>

    <klienci>
        <klient>
            <pesel>96022921836</pesel>
            <imie>Piotr</imie>
            <nazwisko>Łuszcz</nazwisko>
            <login>skoczek</login>
            <wypozyczenia>
                <wypozyczenie>
                    <albumy>
                        <album numer="AL_01" />
                        <album numer="AL_02" />
                    </albumy>
                    <data_rozpoczecia>2022-10-23</data_rozpoczecia>
                    <data_zakonczenia>2022-11-04</data_zakonczenia>
                </wypozyczenie>
                <wypozyczenie>
                    <albumy>
                        <album numer="AL_01" />
                        <album numer="AL_20" />
                    </albumy>
                    <data_rozpoczecia>2022-11-04</data_rozpoczecia>
                    <data_zakonczenia>2022-11-08</data_zakonczenia>
                </wypozyczenie>
                <wypozyczenie>
                    <albumy>
                        <album numer="AL_14" />
                        <album numer="AL_23" />
                    </albumy>
                    <data_rozpoczecia>2022-10-23</data_rozpoczecia>
                </wypozyczenie>
            </wypozyczenia>
        </klient>
        <klient>
            <nip>8110107479</nip>
            <imie>Christian</imie>
            <nazwisko>Perez</nazwisko>
            <login>mr_worldwide</login>
            <wypozyczenia>
                <wypozyczenie>
                    <albumy>
                        <album numer="AL_10" />
                        <album numer="AL_11" />
                    </albumy>
                    <data_rozpoczecia>2021-03-15</data_rozpoczecia>
                    <data_zakonczenia>2021-03-30</data_zakonczenia>
                </wypozyczenie>
                <wypozyczenie>
                    <albumy>
                        <album numer="AL_03" />
                        <album numer="AL_13" />
                    </albumy>
                    <data_rozpoczecia>2022-04-07</data_rozpoczecia>
                    <data_zakonczenia>2022-04-04</data_zakonczenia>
                </wypozyczenie>
            </wypozyczenia>
        </klient>
    </klienci>
</plytoteka>
`;
