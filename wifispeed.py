from speedtest import Speedtest
st = Speedtest()
print("Your connection's download speed is" , st.download())
print("Your connection's upload speed is" , st.upload())
