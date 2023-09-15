function valorTotalIPI(porcentagem, cp1, vp1, qntp1, cp2, vp2, qntp2) {
    let vTotal = (vp1 * qntp1 + vp2 * qntp2) * (porcentagem / 100 + 1);
  
    return vTotal;
  }
  
  module.exports = { valorTotalIPI };