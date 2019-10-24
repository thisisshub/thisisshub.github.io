private void CalcActionPerformed(java.awt.event.ActionEvent evt) {                                     
float rt, qty, amt, dis, net;
rt = Float.parseFloat(rateTF.getText());
qty = Float.parseFloat(qtyTF.getText());
amt = rt * qty;
if (platRB.isSelected()==true)
dis = amt * 10/100;
else if (goldRB.isSelected()==true)
dis = amt * 8/100;
else
dis = amt * 5/100;
net = amt - dis;
totalTF.setText(""+amt);
disTF.setText(""+dis);
netTF.setText(""+net);
// TODO add your handling code here:
    }    
