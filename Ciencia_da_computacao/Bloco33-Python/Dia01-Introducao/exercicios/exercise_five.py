from math import ceil


def coverage_paint(square_meter):
    bowls_neededs = 0
    bowl_price = 80.00

    if square_meter % 54 == 0:
        bowls_neededs = square_meter / 54
        bowl_price *= bowls_neededs
    else:
        bowls_neededs = ceil(square_meter / 54)
        bowl_price *= bowls_neededs

    return (int(bowls_neededs), float(bowl_price))


print(coverage_paint(55))
